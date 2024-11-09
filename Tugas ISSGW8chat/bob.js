const crypto = require("crypto");

const recipientPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCSYvD1vylNyPo1
NOT7bTzK+L/qtFO/eDpl20PLIyZpTrsE4oDgNkphw0iq9dEdm2J6uptvGObSjiY3
R4mUP/QwTUEDP1GzaHJBDWebkRIg9E45huegoKHlmKTPP5JHS9ZeOKu61VAORUj+
sGYeDN61fMz39HX+G+HRmqdPbLKcLY7ePqDkWORKNACgkultz7syFQ3F9HFOONo7
Wtj4IpsxwCOSQk90N5dnQqohCzGjOSnhf3OQk+U3g4kYvkxelL2z1Xarz/4hSdAC
rkKTkZ7FQCin0uaDiIr5FZWH2x12uhdOrdblqw8BQ7cZWDkrGOvdKvYMWB+6nlsq
oAbmL/mBAgMBAAECggEAAsr1HUB5ZuzXq94yJC3bBBBSMQXMYeccThyBzZqtEpiY
RClCG4T4TvyCeBMv2yhqF5H/LH5wIOzqA7ykqPm+DJHcv1VyQexTNF8vboNfsitB
ts1BFrUZ1vSI6Gn7vh/PRjA/Q9WVV8BbT9NJD3e1ZAcD2L3cO8MyarpQSNlNCw0N
aBLJGsoQJbJlomWsokqTNsWWlSSnffYWWMp/zSiinZsNCVA9sGegR/AGI3o5jqSH
6YOYATUNy2Cow9MKtEp9lX7M2C/CcubGWNuXdfNbfx8REDqk0qSUOHx30UF7o51j
q5TYn9rCJ+nPALzI44mY5G+66uCaMgwtxVVINJcCNQKBgQDCWQoJQyIjey98wcf0
dxw40DJE+V89toJUiZ1xOQbi1ybmwlQFC5mkK7TG3Jlyvji+g9fdnHcEzlLF0qzR
ZpzV832HQ60HmlROmmBhMDLwIes8HB0alMAEuKx8J4YAlyOA9DS4wnK+3Am5ckoi
2IA2uxtr7VRyMyXjFBWXjWB4TwKBgQDA0vgn7QDrCQ3MHoq6jM4XTDkuv8WYnF8r
W7XG0YOj927/LXFTw1KrC/2pxIpgVEv+S6uBlog7KUkHsjaiwfGm6w5/nlazpRQ8
EvAcLPHe7Zt0gR+SND8IHXZ7XpCUJtV0PDOZQDcmlMB1HLDMwMlZVPuszbE4Aj2+
jVm7VWwtLwKBgQCpvkrdvBzdEIJxXG7gPggQNwcw5v0gUX+Thn5UnZI+HdyEP8ZS
gcc3dFT4O0Rqy2mUPGMV08rAD9SLo239lrn0xC4nLhy6PzjTTlJPkGFtCrMCVSu2
Q6VSellsNrj7WwZPYvuJQ4wk1tpHdmL5/E4/fzx8D1VqSPIWWzxgmcJgUQKBgBiM
w7uRmURTasZKPS9zLeoZck5ZbDb58cP7cTFXC4OcxS0IBB2+CJBufmVW+Kc7FFHU
IInnOIEPyJSKRBqExteRpc7pwfAtXF4pqxhrQIA5kElNB0/+Buhpl+QtLgsuxo59
+7PPUTZASiCe/oOTKA+Pmltt9NpErsfMB1iqj5NRAoGAXrao94+1Q4zJBXcdeCNT
a8vw6RHG4nSHF13chC7YyVkaYUyatMEH8fkz1S32FJ8jZQ+x9dQKDmuJ/m9SbVs3
88oMhVPmQ3NCx9NyoyCBBnrgHFpCl0UEYjl51/eSX3sZLguBpBEx1U3QiEWvoImQ
cvgyaNOKsLErGlSd1qvURPM=
-----END PRIVATE KEY-----`
const recipientPrivateKey = crypto.createPrivateKey(recipientPrivateKeyPem);

const senderPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu5P/XCJNbfR5ST+V24qk
TH64JCYna01QzvnOfTRIiG6Q+/lSyhYnHmDxDmk3109X4kdyNhm6w2rievqkODxM
fL6c3tEM/dHTb9vVpFHLfQPSOjGf6nTyWY5YcTHqmEq7+H62gsyWNW6Q1IovX/Wr
JCryuB7TrJbXXaZSkhvM3My178Ah3xqW9eMirt0y8uk5UxjSqXPDbHXwgZCWFqGm
ZRkd36UGBy8CW7YTxmEMXWkTVEia5BhZLrh+MAs2LY+cYhs1dLJnvXsXIyqiM/uZ
dzRKzCMqDgDGS2n9b7dag7XGr8+nWCyXULUevABXW1a9X0epq3DFpQPSFMAS9RAe
eQIDAQAB
-----END PUBLIC KEY-----`;
const senderPublicKey = crypto.createPublicKey(senderPublicKeyPem);

const signatureHex = "7ba8a4ebd973ee627cb0eb133c23d199c20d1c256562e47526a7767996a2bf74d0ef582f5fc0808e94020acd719d7f43ce30c0fae4f7716518890a6c0d19af17a52f8ba8400b05d8ad28f37f0e8d32113d9e874f95598ab0c3b906628b181b19797e9d18dd09feb86fdf12cbaffc1f31d0d8e7e03dcb6f751f23782a033384590b73aab804b5d2104838bb68451beaa5a034f4de0bd8482529ad27eaa288b73c24122dec266b228393ae28b49680f63b44c3e604692817ab194998bae69f038a0b0c7d4d126249c2bbcd9d0594b7c50d53dc546f55f4c28069a00b25491cfabbaad172d9e90941f9ace5964e485903b105c6b09414fc203e783b95690e7295cd";
const ciphertextHex = "1f984f34f88f3459e510f68018e96fd2da3c63689efeb237b5fcc63c5e211ced296ee62d4855e63de95660a5edec35a22401b38a68f465d1ec037451e3983d6dbef43370c8980a6a86493661f4f1cf2e62e95e2676ff9a6a668d282173b1f821cae55947aa870477fb0e9f7746f18ac7e2546f5cc4144a25edf651bc66896ff46ca3168019b529cb2b434a3ed4a140d00a135099a0c4c432518a6b8a44e5387c9c1b58150e3a1ea7c26eb3b4cfb471d3790dba2dfcffcaeb7d26e9f5bb21e670eb822f176dfc6bf3cfa64a332072b204baa1f1c18363952e6a1661ed5f58d42b5c211396f1d411b4c3f962896412c62decaec7b4c8750d48b4fd16de2b6f7477";
const ciphertext = Buffer.from(ciphertextHex, "hex");
const signature = Buffer.from(signatureHex, "hex");

const message = "i want some apples";
const data = Buffer.from(message);

const isValid = crypto.verify("sha256", data, senderPublicKey, signature);
console.log("Signature Verification:", isValid);
console.log("Message:", message);