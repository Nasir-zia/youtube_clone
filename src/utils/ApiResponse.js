class ApiResponse extends Response {
    constructor(data = null, 
        message = "Success",
         statusCode = 200,
          headers = {}) {
            this.data = data;
            this.message = message;
            this.statusCode = statusCode;
            this.headers = headers;
            this.success = true;
        }   
}
export default ApiResponse;