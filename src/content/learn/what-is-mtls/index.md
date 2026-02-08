---
title: What Is mTLS?
slug: what-is-mtls
date: 2025-04-16T10:10:53.000Z
description: >-
  Mutual TLS (mTLS) is a variation on transport layer security (TLS).
  Traditional TLS is the successor to secure sockets layer (SSL) and is the most
  widely deployed…
categories:
  - Kubernetes
excerpt: "Mutual TLS (mTLS) is a variation on transport layer security (TLS). Traditional TLS is the successor to secure sockets layer (SSL) and is the most widely deployed standard for secure communication, most visibly in HTTPS. TLS establishes secure communication that is both confidential (resistant to eavesdropping) and authentic (resistant to tampering) between a server that needs to prove its identity to its clients. But, in situations where both parties need to prove their identity to each other—such as between microservices in a Kubernetes application—TLS isn’t sufficient. mTLS is used in cases where both parties must prove their identities to each other.\_ mTLS extends the security provided by TLS(/blog/istio-gateway-upgrade-challenges-how-we-solved-tls-issues-and-ensured-seamless-service-delivery/) by adding mutual authentication between the client and the."
---

Mutual TLS (mTLS) is a variation on transport layer security (TLS). Traditional TLS is the successor to secure sockets layer (SSL) and is the most widely deployed standard for secure communication, most visibly in HTTPS. TLS establishes secure communication that is both confidential (resistant to eavesdropping) and authentic (resistant to tampering) between a server that needs to prove its identity to its clients. But, in situations where both parties need to prove their identity to each other—such as between microservices in a Kubernetes application—TLS isn’t sufficient. mTLS is used in cases where **both parties must prove their identities to each other**.  mTLS extends the security provided by TLS by adding mutual authentication between the client and the server.

> Tetrate offers enterprise-ready, 100% upstream distributions of Istio and Envoy Gateway, the easiest way to implement mTLS for cloud-native applications. 

## How Does mTLS Work?

Since mTLS is essentially two-way TLS, it’s helpful to understand how TLS works and the system of public key cryptography it relies on to establish trust and secure encryption.

TLS is built on top of TCP as the session layer in the OSI model and provides the encryption for multiple application-layer protocols such as the HTTPS we see when browsing the web (Figure 1).

**Figure 1.** _The unencrypted HTTP protocol vs the HTTPS protocol which uses TLS for encryption._

### Encryption

Encryption is the process of converting plaintext into ciphertext in order to protect it from unauthorized access. The process is done using an encryption algorithm and an encryption key, which is kept secret by the parties involved in the communication.

The encrypted data, or ciphertext, can only be decrypted and read by someone who has the corresponding decryption key. This allows the original plaintext to be, for example, transmitted securely over a network without the risk of being intercepted and read by unauthorized parties. Encrypting network data is known as “encryption in transit” or “encryption on the wire.” Encrypting data when it is stored, such as on a hard drive or in a cloud storage service, is often called “encryption at rest.” When we talk about encryption in the context of TLS and mTLS, we are talking about encryption in transit.

There are two main types of encryption: symmetric encryption and asymmetric encryption. In symmetric encryption, the same key is used for both encryption and decryption, while in asymmetric encryption, a different key is used for encryption and decryption. Both symmetric and asymmetric encryption have their own strengths and weaknesses, and are often used together to provide a combination of security and convenience.

### Symmetric Cryptography Using a Secret Key

Symmetric cryptography uses a single secret key to encrypt and decrypt messages. The secret key must be shared between the client and the server, but it must be kept secret (only the client and server  know what it is) since anyone with the secret key can read the messages.Symmetric cryptography is less computationally intensive than asymmetric encryption, but it has some disadvantages, especially with regard to key management. For client-server communication, the key must be shared securely between the client and server—which is hard to do securely over a network, especially across  public networks like the Internet. Also, the shared key must also be kept secret, since anyone with the key can decrypt the ciphertext. For these reasons, **TLS and mTLS use asymmetric encryption to establish a secure channel, then switch to the more efficient symmetric cryptography to encrypt the rest of the communication.**

**Figure 2.** _TLS uses different encryption methods for establishing connections and transmitting data._

### Asymmetric Cryptography Using Pairs of Public and Private Keys

Asymmetric cryptography uses pairs of public and private keys to encrypt and decrypt data. Messages are encrypted with the public key, but can only be decrypted with the corresponding private key. The client and server share their public keys with each other, but keep their private keys private. When the client sends a message to the server, it encrypts the message with the server’s public key and the server uses its private key to decrypt the message. The same thing happens in reverse when the server sends a message to the client: the server encrypts the message with the _client’s_ _public key_ and the client uses its private key to decrypt the message from the server.

Since neither the client nor the server need to share a secret key and their public keys don’t need to be shared securely, asymmetric cryptography works well in hostile environments like the open Internet. But, asymmetric cryptography can be orders of magnitude more computationally intensive than symmetric cryptography.

### TLS Uses Both Symmetric and Asymmetric Cryptography to Balance Security and Efficiency

TLS uses a combination of symmetric and asymmetric cryptography to strike a balance between [security](/learn/kubernetes-security-best-practices) and computational efficiency. The more computationally expensive asymmetric encryption is used to generate and exchange shared, secret session keys during the handshake when the TLS connection is established. The shared session keys  are then used by both the client and server to encrypt and decrypt the rest of their communication using less expensive symmetric encryption. The session keys are unique to each communication session, providing additional security by ensuring that each communication session has its own set of keys, limiting the risk of session key compromise. After the communication session is complete, the session keys are discarded and a new set of session keys is generated for each subsequent session.

### Public Key Certificates, Certificate Authorities (CA), and Public Key Infrastructure (PKI)

The public keys used in asymmetric cryptography don’t have to be secret and can be shared publicly. But, we need a way to make sure that public keys are _authentic_—that the server you’re connecting to actually _is_ the server you think it is (and not a bad actor pretending to be that server, also known as a man-in-the-middle attack) and that the public key it gives you isn’t fake. To do this, TLS relies on a system of digitally signed certificates issued by a trusted third party called a certificate authority (CA) to prove the authenticity of the public key and the identity of the server presenting the key.

This system established to support issuing, validating, and revoking public key certificates is known as a public key infrastructure (PKI) (Recommendation ITU-T X.509 | ISO/IEC 9594-8)

During the TLS handshake, the server presents the certificate to the client to prove the authenticity of the server’s identity and the public key attached to the certificate. The client can then use the public key attached to the certificate to encrypt messages to the server.

### Root CAs and Root Certificates

For public key infrastructure to work, everyone (and everything) using it must agree on a set of one or more trusted third parties. Those trusted third parties are known as “root CAs”  and they create and publish a self-signed “root certificate.”

Typically, devices have a set of those trusted root certificates securely installed in what’s known as a “root store” or “root CA bundle.”  The presence of a root certificate in the root store of a device (or software installed on the device) establishes trust in the root CA that issued the root certificate.

For the public Internet, the root CAs are operated by well-known commercial or non-profit organizations, but some organizations operate their own PKI with their own CAs.

### Subordinate CAs and Intermediate Certificates

The security of the private key held by a root CA is critical, since there is no (practical) way to revoke a root certificate. As a result, root CAs are almost never online. Instead, root CA’s delegate their authority to subordinate CAs by issuing an “intermediate certificate” to the subordinate CA. The validity of intermediate certificates can be traced back to the root CA that issued them and intermediate certificates can be revoked. Subordinate CAs can further delegate their authority to their own subordinate CAs, also by issuing intermediate certificates.

### Leaf Certificates and Certificate Chains

An “end-entity” or “leaf” certificate is typically issued to individual servers by a CA. These certificates are the “leaves” of a hierarchical tree of authority that’s traceable from the leaf certificates up through the intermediate certificates, and ultimately to a trusted root certificate.

When a client connects to the server, the server sends its leaf certificate along with the chain of certificates that can be traced all the way back to a root certificate. The client then validates the certificate, typically with the following checks:

- **Verifying the certificate’s signature** to ensure that the certificate was actually issued by the CA and has not been tampered with.
- **Checking the certificate’s status:** The client checks the certificate’s expiration date, as well as any other relevant information such as the domain name or the subject’s public key, to ensure that the certificate is still valid.
- **Checking the certificate chain:** The client follows the links in the certificate chain, starting with the server’s leaf certificate, and checking each intermediate certificate in the chain. It uses the information in each certificate to verify.
- **Validating the root certificate:** The client validates the trusted root certificate by checking that it is in its list of trusted root CAs. This ensures that the root certificate is a trusted and authoritative source of information about other certificates.

### CA Bundle

A TLS client has a list of trusted root certificates installed in a “CA bundle”. The client uses the CA bundle to verify the signature on the server’s certificate and determine if it was issued by a trusted CA. If the signature is verified, the client can trust that the certificate belongs to the server it is communicating with.

### Certificate Revocation

In a public key infrastructure, certificate revocation is a process that allows a CA to declare a certificate as invalid before its expiration date. This is done when a certificate is no longer considered trustworthy, such as when the private key associated with the certificate has been compromised or the subject of the certificate is no longer authorized to use it.

Clients can ask the CA if the certificate offered by a server is still valid. Two commonly used techniques are  certificate revocation lists (CRL) and the newer online certificate status protocol (OCSP). For CRLs, a CA publishes a signed list of revoked certificates that a client can check to ensure a server’s certificate is still valid.  With OCSP, a client can request the status of a particular certificate.

By allowing certificates to be declared invalid when they are no longer trustworthy, certificate revocation helps to protect against security risks and ensure the confidentiality and privacy of sensitive information transmitted over secure connections.

### TLS Handshake

When a client initiates a secure connection with a server, they perform a TLS handshake to negotiate the TLS protocol to use, establish the identity of the server, and to generate and share session keys that will be used for symmetric encryption of the subsequent messages in the session.

Figure 3 below represents a simplified version of what happens during the TLS handshake.

**Figure 3.** _Simplified TLS handshake flow._

1.  A request from the client to the server containing information such as the TLS version and password combination supported by the client.The server responds to the client request and attaches a digital certificate.
2.  The client verifies the status, validity, and digital signature of the certificate and confirms the identity of the server. The client and server agree on and exchange a shared, secret session key.
3.  Encrypted communication commences between the client and the server using a symmetric encryption with the shared secret key.

## How Is mTLS Different from TLS and SSL?

mTLS extends the security provided by TLS by adding mutual authentication between the client and the server. In mTLS, both the client and the server present their own certificates to each other and verify the identity of each other before establishing a secure connection.

In contrast, TLS (and its predecessor SSL) only provides authentication of the server to the client, which is sufficient for many use cases where the client trusts the server and wants to verify the identity of the server before sending sensitive data.

TLS is an IETF standard that evolved from secure sockets layer (SSL) developed by Netscape in the 1990s and are closely related. The two terms, TLS and SSL, are often used interchangeably, though SSL has been deprecated due to security issues in favor of TLS.

## Why Do I Need mTLS?

mTLS is a crucial component of a zero trust architecture. One of the tenets of zero trust networking is to assume that an attacker is already on your network. To limit the “blast radius” of an intrusion, it’s important to prevent the intruder from pivoting to other resources on your network. mTLS connections limit reconnaissance and provide for the authenticity of communication so that an intruder can’t eavesdrop, alter messages, impersonate resources, or otherwise intercept messages on your network.

## When Do I Need mTLS?

As part of a zero trust security posture, you should use mTLS for network communication between application components that you have some control over—like between microservices in a cluster.

One-way TLS is typically used by Internet clients to connect to web services, which means that only the server needs to show identification and is unconcerned with the identity of the client. One-way TLS allows you to use passwords, tokens, two-factor authentication, and other methods when you need to confirm the identity of the client. However, when using a supporting technology like a service mesh, mTLS operates outside the application and doesn’t require many changes to the application logic to implement.

Since mTLS implementation calls for certificate exchange between services, as the number of services rises, managing numerous certificates becomes a laborious task. You can implement automatic mTLS to mitigate the complexity of certificate management with the aid of a service mesh.

## When Don’t I Need mTLS?

Although mTLS is the preferred protocol for securing inter-service communication in cloud-native applications, implementing mTLS is more complex. In some cases where there is high traffic volume or CPU utilization must be optimized, terminatingTLS at the traffic entry point and turning on mTLS internally only for specific, security-sensitive services can help minimize request response times and decrease compute resource consumption for some traffic with lower security requirements.

There may be cases where mTLS for certain connections is impractical, such as health checks or access to external services.

## How Do I Implement mTLS?

### The Hard Part of mTLS: Proving Identity

While mTLS offers significant security advantages, it offers some implementation challenges, not least of which is establishing a secure mechanism for services to prove their identity to each other.

For regular TLS, it used to be hard to manage the certificates that prove the identity of a server to its clients. 

Rolling your own automated certificate management system is impractical and risky. Getting mTLS certificate management right is hard and the consequences of getting it wrong are bad. You need a trusted, proven way to do it. A service mesh is purpose-built to provide the infrastructure you need to safely and securely implement mTLS between services.

### Use a Service Mesh, the NIST Standard for Microservices Security

In its standards for microservices security.

If you want the details of NIST’s standards for microservices security and how Tetrate helps meet them, check out [Tetrate’s Guide to Federal Security Requirements for Microservices](/resources/tetrate-guide-to-federal-security-requirements-for-microservices).

## How Do I Implement mTLS with Istio?

Figure 4 depicts the security architecture of Istio. This figure clearly shows that at the entry point, JSON Web Token (JWT) + TLS authentication and encryption are used, and that mTLS is enabled between all services within the Istio mesh.

**Figure 4.** _Istio mTLS flow_.

Istio includes a built-in CA, and Secret Discovery Service (SDS)

1.  The sidecar of every service requests a certificate from Istiod on behalf of the workload at startup, and _istiod_ issues the SVID
2.  The sidecar of every workload intercepts all client requests within the pod.
3.  The client sidecar starts an mTLS handshake with the server sidecar. During the handshake, the JWT
4.  If the request is authenticated and authorized, the client and the server start to establish a connection for communication.

In Istio, authentication and authorization between services can be configured using one of three resource objects:


### How to Enable Automatic mTLS in Istio

In Istio’s PeerAuthentication configuration

- PERMISSIVE: The workload’s default setting that allows it to accept either mTLS or plain text traffic.
- STRICT: The workload accepts only mTLS traffic.
- DISABLE: Disable mTLS. From a security perspective, mTLS should not be disabled unless you have your own security solution.
- UNSET: Inherited from the parent, with the following priority: service specific > namespace scope > mesh scope setting.

Istio’s peer authentication uses PERMISSIVE mode by default, automatically sending mTLS traffic to these workloads and clear text traffic to workloads without a sidecar. After including Kubernetes services in the Istio mesh, we can use PERMISSIVE mode first to prevent services from failing mTLS. We can use one of two ways to enable strict mTLS mode for certain services:

- Use PeerAuthentication to define how traffic is transferred between sidecars.
- Use DestinationRule to define the TLS settings in the traffic routing policy.

The reviews service’s mTLS configuration in the default namespace can be seen in the example below.

### Use PeerAuthentication to Set mTLS for Workloads

For instance, the following configuration can be used to specify that a workload under a namespace has strict mTLS enabled.

```
apiVersion: security.istio.io/v1beta1
 kind: PeerAuthentication
 metadata:
  name: foo-peer-policy
  namespace: default
 spec:
  selector:
    matchLabels:
      app: reviews
  mtls:
    mode: STRICT
```

According to the Istio documentation

### Use DestinationRule to Set up mTLS for Workloads

Traffic routing policies, such as load balancing, anomaly detection, TLS settings, etc., are set using DestinationRule. In the TLS settings, there are various modes. As shown below, use `ISTIO_MUTUAL` mode to enable Istio’s workload-based automatic TLS.

```
apiVersion: networking.istio.io/v1beta1
 kind: DestinationRule
 metadata:
  name: reviews
  namespace: default
 spec:
  host: reviews
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
```

## Service Mesh mTLS Best Practices for Enterprise Deployments

Istio is the standard for implementing mTLS in a cloud-native environment, but there are some best practices that will help make your deployment of  mTLS in an enterprise environment more secure.

### Best Practice: Don’t Use Self-Signed Certificates

While Istio will implement mTLS for you, it uses self-signed certificates by default so you can see the mesh working right away, with minimal configuration. This makes the initial user experience easy, but it’s not not suitable for production environments. NIST’s guidance (NIST SP 800-204A, SM-DR12) is to disable the ability to generate self-signed certificates entirely.

### Best Practice: Root Istio’s Trust in Your Existing PKI

If you’re not supposed to use Istio’s default self-signed certificates, what’s the alternative? The short answer is that you should root Istio’s trust in your existing public key infrastructure (PKI)

### Best Practice: Use an Intermediate Certificate

How, exactly, do you root Istio’s trust in your existing PKI? Tetrate founding engineer and co-author of NIST’s security standards for microservices, Zack Butcher, has all the details here

- Allow for fine-grained cert revocation without forcing new certificates across your entire infrastructure at the same time.
- Enable easy rotation of signing certificates.

For step-by-step instructions on how to automate Istio certificate authority (CA) rotation, see our article on automating Istio CA rotation in production at scale.

## Is mTLS All I Need for Zero Trust Security?

In short, zero trust security is more than just mTLS, although mTLS is an important part of a zero trust architecture, especially for microservices. Zero trust networking is an approach governed by a few important principles more than it is a particular technology. In a zero trust network, all access to resources should be:

- **Authenticated and dynamically authorized**, not only at the network layer and the service-to-service layer, but also at the application layer. Network location does not imply trust. Service identity and end-user credentials are authenticated and dynamically authorized before any access is allowed.
- **Bounded in time:** authentication and authorization are bound to a short-lived session after which they must be re-established.
- **Bounded in space:** the perimeter of trust around a service should be as small as possible.
- **Encrypted**, both to prevent eavesdropping and to ensure messages are authentic and
- unaltered.
- **Observable**, so the integrity and security posture of all assets may be continuously monitored and policy enforcement continuously assured. Also, insights gained from observing should be fed back to improve policy.

Implementing mTLS between resources like microservices in Kubernetes cluster provides authentication and encryption, but doesn’t address the rest of the full scope of a zero trust architecture. To learn more, [download our zero trust architecture white paper](/resources/zero-trust-architecture-white-paper) written by Zack Butcher, Tetrate founding engineer and co-author of the NIST security standards for microservices applications.
