import json
import xml.etree.ElementTree as ET
from typing import Dict, Any, Optional, List
from enum import Enum


class ProtocolType(str, Enum):
    REST = "rest"
    SOAP = "soap"
    GRAPHQL = "graphql"
    GRPC = "grpc"
    WEBDAV = "webdav"
    FTP = "ftp"
    ODATA = "odata"


class ProtocolTranslator:
    def __init__(self):
        self._field_mappings: Dict[str, Dict[str, str]] = {}
        self._transformers: Dict[str, callable] = {
            "rest_to_soap": self._rest_to_soap,
            "soap_to_rest": self._soap_to_rest,
            "rest_to_graphql": self._rest_to_graphql,
            "graphql_to_rest": self._graphql_to_rest,
            "rest_to_grpc": self._rest_to_grpc,
        }

    def translate(
        self,
        data: Dict[str, Any],
        source: ProtocolType,
        target: ProtocolType,
    ) -> Dict[str, Any]:
        key = f"{source.value}_to_{target.value}"
        transformer = self._transformers.get(key)

        if transformer:
            return transformer(data)

        return {
            "translated": False,
            "source": source.value,
            "target": target.value,
            "data": data,
            "warning": f"No translator available for {source.value} -> {target.value}",
        }

    def _rest_to_soap(self, data: Dict[str, Any]) -> Dict[str, Any]:
        envelope = {
            "soap:Envelope": {
                "@xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
                "soap:Body": {
                    "request": data,
                },
            }
        }
        return {
            "translated": True,
            "source": "rest",
            "target": "soap",
            "format": "xml_envelope",
            "data": envelope,
            "content_type": "text/xml; charset=utf-8",
        }

    def _soap_to_rest(self, data: Dict[str, Any]) -> Dict[str, Any]:
        body = data.get("soap:Envelope", {}).get("soap:Body", {})
        return {
            "translated": True,
            "source": "soap",
            "target": "rest",
            "format": "json",
            "data": body.get("response", body),
            "content_type": "application/json",
        }

    def _rest_to_graphql(self, data: Dict[str, Any]) -> Dict[str, Any]:
        operation = data.get("operation", "query")
        resource = data.get("resource", "items")
        fields = data.get("fields", ["id", "name"])
        filters = data.get("filters", {})

        field_str = "\n    ".join(fields)
        filter_parts = [f'{k}: "{v}"' for k, v in filters.items()]
        filter_str = f'({", ".join(filter_parts)})' if filter_parts else ""

        query = f"""
{operation} {{
  {resource}{filter_str} {{
    {field_str}}
  }}
}}
        """.strip()

        return {
            "translated": True,
            "source": "rest",
            "target": "graphql",
            "format": "graphql_query",
            "data": {"query": query, "variables": data.get("variables", {})},
        }

    def _graphql_to_rest(self, data: Dict[str, Any]) -> Dict[str, Any]:
        query = data.get("query", "")
        resource = self._extract_graphql_resource(query)

        return {
            "translated": True,
            "source": "graphql",
            "target": "rest",
            "format": "json",
            "data": {
                "method": "GET",
                "resource": resource,
                "fields": self._extract_graphql_fields(query),
            },
        }

    def _rest_to_grpc(self, data: Dict[str, Any]) -> Dict[str, Any]:
        return {
            "translated": True,
            "source": "rest",
            "target": "grpc",
            "format": "protobuf",
            "data": {
                "service": data.get("service", "DefaultService"),
                "method": data.get("method", "Execute"),
                "message": self._dict_to_protobuf_message(data.get("params", {})),
                "metadata": {
                    "content-type": "application/grpc",
                    "grpc-accept-encoding": "gzip",
                },
            },
        }

    def _extract_graphql_resource(self, query: str) -> str:
        import re
        match = re.search(r'\{\s*(\w+)', query)
        return match.group(1) if match else "resource"

    def _extract_graphql_fields(self, query: str) -> List[str]:
        import re
        fields = re.findall(r'^\s+(\w+)\s*$', query, re.MULTILINE)
        return fields

    def _dict_to_protobuf_message(self, data: Dict[str, Any]) -> Dict[str, Any]:
        message = {}
        for key, value in data.items():
            if isinstance(value, str):
                message[key] = {"type": "string", "value": value}
            elif isinstance(value, (int, float)):
                message[key] = {"type": "number", "value": value}
            elif isinstance(value, bool):
                message[key] = {"type": "bool", "value": value}
            elif isinstance(value, list):
                message[key] = {"type": "repeated", "value": value}
            elif isinstance(value, dict):
                message[key] = {"type": "message", "value": self._dict_to_protobuf_message(value)}
        return message

    def map_fields(self, source_fields: Dict[str, str], target_fields: Dict[str, str], data: Dict[str, Any]) -> Dict[str, Any]:
        result = {}
        for source_key, target_key in target_fields.items():
            if source_key in data:
                result[target_key] = data[source_key]
        return result

    def get_supported_translations(self) -> List[Dict[str, str]]:
        return [
            {"from": "rest", "to": "soap", "complexity": "medium"},
            {"from": "soap", "to": "rest", "complexity": "high"},
            {"from": "rest", "to": "graphql", "complexity": "low"},
            {"from": "graphql", "to": "rest", "complexity": "medium"},
            {"from": "rest", "to": "grpc", "complexity": "high"},
            {"from": "grpc", "to": "rest", "complexity": "medium"},
            {"from": "webdav", "to": "rest", "complexity": "low"},
            {"from": "ftp", "to": "rest", "complexity": "medium"},
            {"from": "odata", "to": "rest", "complexity": "medium"},
        ]
