from setuptools import setup, find_packages

setup(
    name="n0va1o",
    version="2026.07.0",
    description="N0VA1O Infinite Integration Gateway — Python SDK",
    long_description="Official Python SDK for N0VA1O. Connect AI agents to 1,000+ platforms.",
    author="N0VA",
    author_email="sdk@n0va.io",
    url="https://n0va.io",
    packages=find_packages(),
    python_requires=">=3.8",
    install_requires=[],
    entry_points={
        "console_scripts": [
            "n0va1o=n0va1o.cli:main",
        ],
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
    ],
)
