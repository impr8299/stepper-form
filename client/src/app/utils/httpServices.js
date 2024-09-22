const baseUrl = "http://localhost:5000/"

const HttpService = {
    RestrurentData : baseUrl + 'external/restaurants',
    StepFormData : baseUrl + 'api/order/store',
    ExportDetails : baseUrl + 'api/order/exportAllOrder'
    
};

export default HttpService;