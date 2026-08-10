use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct PaginatedResponse<T> {
    pub data: Vec<T>,
    pub total: u64,
    pub page: u64,
    pub per_page: u64,
    pub has_more: bool,
}

impl<T> PaginatedResponse<T> {
    pub fn new(data: Vec<T>, total: u64, page: u64, per_page: u64) -> Self {
        let has_more = (page * per_page) < total;
        Self {
            data,
            total,
            page,
            per_page,
            has_more,
        }
    }
}

pub fn get_skip(page: u64, per_page: u64) -> u64 {
    (page.saturating_sub(1)) * per_page
}
