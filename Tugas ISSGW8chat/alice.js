const crypto = require("crypto");

const senderPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7k/9cIk1t9HlJ
P5XbiqRMfrgkJidrTVDO+c59NEiIbpD7+VLKFiceYPEOaTfXT1fiR3I2GbrDauJ6
+qQ4PEx8vpze0Qz90dNv29WkUct9A9I6MZ/qdPJZjlhxMeqYSrv4fraCzJY1bpDU
ii9f9askKvK4HtOsltddplKSG8zczLXvwCHfGpb14yKu3TLy6TlTGNKpc8NsdfCB
kJYWoaZlGR3fpQYHLwJbthPGYQxdaRNUSJrkGFkuuH4wCzYtj5xiGzV0sme9excj
KqIz+5l3NErMIyoOAMZLaf1vt1qDtcavz6dYLJdQtR68AFdbVr1fR6mrcMWlA9IU
wBL1EB55AgMBAAECggEACWry+NLRydQ0BZK+IiBmlV7pGMHSN2n2Mx4b/c0Ao0fP
kbTTVbb9BT3fV+jie9qEZKWYz2Np5BmSJJP2+e6wh9kgbbyg9MhOBFgohtTL7R2i
bXeNOlAoi2SKWagAEt/xIYSw3gXBAg6fNqEuo3PA5dKwfC5YCzYkutyLEHjnbBlW
n2GEUqNMRBB8ErWvtaRlSZw0PHQOje3Xk/z0Eb8dPKB3RnpNeujxIvdxOo30Mv1Z
ANbc+QEIvo33nffzrKuFFuWGho5XIzo/osufIgx9dIcLER7LeHh8QSsg9yJ4UNDW
4ZhXvclyI7kU6JrqBov5fnUppq/yTVo+GDwRuJu/jQKBgQD5SBFc7GazZSPY/u9n
uZb2cLIBlDyjzoXs3P9CzwW0ephC4ie7gXrLIjIbZFnKv6xxbhb3KlfN8r6YgyNA
vwS6zrD9V19naCdEEGIJZpVUxrAjTWyLtpxilUtMzZHoigwHGlbGMMoFyxVL9pZW
71P0DlPpMjI/hKPjFBa3mXKmVwKBgQDAojQZe+KOFsvWJeqxkX7Y0YCxLXdxQ9ts
kNIB1XioZECZXQ/45zY9kSntfbBwH6I/RuOkP0fy9A304pEo/O0bhEBZ9oMBokxu
0TiuUsqjLCMiVhQUKBHw/guVuhjzaiEvnhGIdhVRPq+ATcTvjwhaARwzOzN88eKJ
22HFmqc/rwKBgQDTofqTsGO0k/4uIKlxnx9qE90b+BTPYOtUX38a4hVO1vHjfosK
5m8we9ScasLMnZOyLSu0JS+sOhTT+Cl6s3E5g3bBbmchrEwBvgLtRjkrYw9wuS+Z
Iax9CZCHINNp36E8eoEG+67X4kUvW6bhIYhd37gfd60vPdXBWHG857ptOwKBgAXg
LLSmSbfJzDfg+jKmXHcilMlSuLT0u+mo1S8HIuIIBMxowUb3Tnk8R0oeLlaNMHa7
o8/rujcX6KESlBjq9hSDyS61TTOsjqZGrXLrxZCKlRvEAmLHAh0WsqXDgmVSVGbO
bHx8FZRf1ByWwq4H79pG9GQ/pwdlnWJVFbtgRz+zAoGBAI5D5WJhZww9wgJDfz/y
0nbU8kOgTU/OAmALIGtxODNSdsbCwsO2uyoCw0HBGiTKzgBjIEGidVQ6xWlF+xf/
pK22QIFBU3fJycYGnRZw+6LgT0NhjaYCXgPLjW7CLiOAA8JCL4xPmfzwfQXQzezC
cwCLdIdH7Io9EL6W9QOOEcb+
-----END PRIVATE KEY-----`;
const senderPrivateKey = crypto.createPrivateKey(senderPrivateKeyPem);

const recipientPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkmLw9b8pTcj6NTTk+208
yvi/6rRTv3g6ZdtDyyMmaU67BOKA4DZKYcNIqvXRHZtierqbbxjm0o4mN0eJlD/0
ME1BAz9Rs2hyQQ1nm5ESIPROOYbnoKCh5Zikzz+SR0vWXjirutVQDkVI/rBmHgze
tXzM9/R1/hvh0ZqnT2yynC2O3j6g5FjkSjQAoJLpbc+7MhUNxfRxTjjaO1rY+CKb
McAjkkJPdDeXZ0KqIQsxozkp4X9zkJPlN4OJGL5MXpS9s9V2q8/+IUnQAq5Ck5Ge
xUAop9Lmg4iK+RWVh9sddroXTq3W5asPAUO3GVg5Kxjr3Sr2DFgfup5bKqAG5i/5
gQIDAQAB
-----END PUBLIC KEY-----`
const recipientPublicKey = crypto.createPublicKey(recipientPublicKeyPem);

const message = "i want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, senderPrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(recipientPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));
