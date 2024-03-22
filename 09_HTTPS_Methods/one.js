✔ GET
The GET method is used to retrieve resources from a server. It is said to be a safe method as it does not change the state of the resource in any way.
GET method is idempotent Thus calling this method multiple times will always give the same result.

✔ POST
POST method is used to create a new resource into the collection of resources on a server.
It is important to note that POST is Non-idempotent. Thus invoking two identical POST requests will result in duplicate information being created on the server.

✔ PUT
PUT is used to update the existing resource on the server and it updates the full resource.
If the resource does not exist, PUT may decide to create a new resource.
PUT method is idempotent Thus calling this method multiple times will always update the same resource multiple times.

✔ PATCH
PATCH is used to update the existing resource on the server and it updates a portion of the resource.
If the resource does not exist, PUT may decide to create a new resource.
Just as the PUT method, PATCH is also idempotent

✨PATCH vrs PUT
PUT method primarily fully replaces an entire existing resource but PATCH partially updates an existing resource.

The PATCH method is not a substitute to the PUT method. It applies a delta (diff) rather than replacing the entire resource.

✔ DELETE
DELETE Method is used to delete the resources from a server. It deletes resource identified by the Request-URI.

DELETE method are idempotent.
