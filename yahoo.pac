function FindProxyForURL(url, host) {
  if (
     dnsDomainIs(host, "storage-yahoo.jp") ||
     dnsDomainIs(host, "yahooapis.jp") ||
     dnsDomainIs(host, "yimg.jp") ||
     dnsDomainIs(host, "yahoo.co.jp")
  ) return "PROXY 23.227.38.94:80";

  return "DIRECT";
}
