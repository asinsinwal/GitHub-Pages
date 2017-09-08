### Concetps

#### Q1. Explain some additional concerns related to using REST apis. </br>
#### Solution: </br>
a) REST apis work on HTTP protocol. Because of request/response protocol, it cannot support services initiated by server.
-> "Some of the  problems of REST aren’t inherent problems of the architectural style but rather drawbacks of the REST over HTTP implementation." </br>

b) According to some papers, PUT and DELETE aren't yet supported by all web browsers, thus it is considered okay to "overload POST" by adding a query string argument like method=PUT or method=DELETE on the URI being POSTed. </br>

c) REST api calls are difficult to test or debug, because the developer / engineer has to check the URL, method used (like GET / POST) and status codes (if error response occurred) and thus it becomes a tedious job to handle. </br>

d) REST adds a bit latency, because of decoupling business logic from presentation. Also, due to multiple calls on both endpoints. </br>


#### Q2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. </br>
#### Solution: </br>
a) Language - GraphQL is a _Query language_, whereas REST uses _query string_ (no query language) to provide arguments. Below are the examples for both: 
```sh
{
  emp(id: "1001") {
    name
    height(unit: FOOT)
  }
}
``` 
```sh
{
  "company": {
    "emp": {
      "name": "Animesh",
      "height": 5.78
    }
  }
}
```
GraphQL beats the REST APIs, which in hand try to hand-roll their own query language functionality. </br>

b) Architecture - REST is a _achirtectural concept_ of HTTP protocol, a network-based protocol. It has no specification or set of tools, and it is designed in such a manner that it could decouple an API from the client. Thus, it focuses on making API calls rather than on optimizing performance. GrapQL is a _query language_, has specification and set of tools. It is designed in such a manner that it could operate over a single endpoint via HTTP. Thus, GraphQL focuses over optimizing performance and flexibility. </br>

c) Performance - GraphQL is always the smallest possible request, which is good from client perscpective. Whereas REST generally defaults to the fullest, where more bits are being transferred over the wire by default, than with the GraphQL approach. Thus, GraphQL makes client performance better. </br>

d) Caching - REST is a endpoint based API, thus all clients use HTTP caching - to avoid refetching resources and to identify when two of resources are same. In GraphQL, there's no URL-like primitive, thus object cannot be uniquely identified globally. As HTTP uses whole pile of HTTP convention, which benefits API clients and API servers to work easily among themselves, thus REST api is better for caching. </br>

e) Data Transfer - REST api handles CRUD operation, using JSON most of the time, but it could do other tasks as well - like uploading an image or a large file. Whereas GraphQL has a dedicated service, which could only be communicated in terms of fields. Thus, REST api can do more than, just sending fields forwards and backwards. </br>
