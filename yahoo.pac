function FindProxyForURL(url, host) {
  if (
     dnsDomainIs(host, "storage-yahoo.jp") ||
     dnsDomainIs(host, "yahooapis.jp") ||
     dnsDomainIs(host, "yimg.jp") ||
     dnsDomainIs(host, "yahoo.co.jp")
  ) return "PROXY 198.8.94.170:4145";

  return "DIRECT";
}
