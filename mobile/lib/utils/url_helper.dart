import 'package:immich_mobile/domain/dtos/store.dto.dart';
import 'package:immich_mobile/domain/utils/store.dart';

String sanitizeUrl(String url) {
  // Add schema if none is set
  final urlWithSchema =
      url.trimLeft().startsWith(RegExp(r"https?://")) ? url : "https://$url";

  // Remove trailing slash(es)
  return urlWithSchema.trimRight().replaceFirst(RegExp(r"/+$"), "");
}

String? getServerUrl() {
  final serverUrl = Store.I.tryGet(StoreKey.serverEndpoint);
  final serverUri = serverUrl != null ? Uri.tryParse(serverUrl) : null;
  if (serverUri == null) {
    return null;
  }

  return serverUri.hasPort
      ? "${serverUri.scheme}://${serverUri.host}:${serverUri.port}"
      : "${serverUri.scheme}://${serverUri.host}";
}
