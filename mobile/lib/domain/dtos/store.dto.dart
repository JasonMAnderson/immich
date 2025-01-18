import 'package:immich_mobile/domain/dtos/user.dto.dart';
import 'package:immich_mobile/domain/exceptions/store.exception.dart';
import 'package:immich_mobile/domain/interfaces/store.interface.dart';
import 'package:immich_mobile/domain/utils/store_converters.dart';

/// Key for each possible value in the `Store`.
/// Defines the data type for each value
enum StoreKey<T> {
  version<int>._(0),
  assetETag<String>._(1),
  currentUser<UserDto>._(
    2,
    primitiveType: String,
    converter: StoreUserConverter(),
  ),
  deviceIdHash<int>._(3),
  deviceId<String>._(4),
  backupFailedSince<DateTime>._(5),
  backupRequireWifi<bool>._(6),
  backupRequireCharging<bool>._(7),
  backupTriggerDelay<int>._(8),
  serverUrl<String>._(10),
  accessToken<String>._(11),
  serverEndpoint<String>._(12),
  autoBackup<bool>._(13),
  backgroundBackup<bool>._(14),
  // TODO: Refactor to use a converter and a single value
  sslClientCertData<String>._(15),
  sslClientPasswd<String>._(16),
  loadPreview<bool>._(100),
  loadOriginal<bool>._(101),
  themeMode<String>._(102),
  tilesPerRow<int>._(103),
  dynamicLayout<bool>._(104),
  groupAssetsBy<int>._(105),
  uploadErrorNotificationGracePeriod<int>._(106),
  backgroundBackupTotalProgress<bool>._(107),
  backgroundBackupSingleProgress<bool>._(108),
  storageIndicator<bool>._(109),
  thumbnailCacheSize<int>._(110),
  imageCacheSize<int>._(111),
  albumThumbnailCacheSize<int>._(112),
  selectedAlbumSortOrder<int>._(113),
  advancedTroubleshooting<bool>._(114),
  logLevel<int>._(115),
  preferRemoteImage<bool>._(116),
  loopVideo<bool>._(117),
  // Map related
  mapShowFavoriteOnly<bool>._(118),
  mapRelativeDate<int>._(119),
  mapIncludeArchived<bool>._(121),
  mapThemeMode<int>._(124),
  mapwithPartners<bool>._(125),
  selfSignedCert<bool>._(120),
  ignoreIcloudAssets<bool>._(122),
  selectedAlbumSortReverse<bool>._(123),
  enableHapticFeedback<bool>._(126),
  customHeaders<String>._(127),
  primaryColor<String>._(128),
  dynamicTheme<bool>._(129),
  colorfulInterface<bool>._(130),
  syncAlbums<bool>._(131),
  autoEndpointSwitching<bool>._(132),
  preferredWifiName<String>._(133),
  localEndpoint<String>._(134),
  externalEndpointList<String>._(135),
  loadOriginalVideo<bool>._(136),
  ;

  const StoreKey._(
    this.id, {
    Type? primitiveType,
    IStoreConverter<T>? converter,
  })  : _converter = converter,
        _primitiveType = primitiveType;

  final int id;

  final Type? _primitiveType;
  Type get primitiveType =>
      _primitiveType ??
      switch (T) {
        const (int) || const (DateTime) || const (bool) => int,
        const (String) => String,
        _ => throw StoreUnkownPrimitiveTypeException(this, T),
      };

  final IStoreConverter<T>? _converter;
  IStoreConverter<T> get converter =>
      _converter ??
      switch (T) {
        const (int) => const StoreIntConverter() as IStoreConverter<T>,
        const (String) => const StoreStringConverter() as IStoreConverter<T>,
        const (bool) => const StoreBoolConverter() as IStoreConverter<T>,
        const (DateTime) =>
          const StoreDateTimeConverter() as IStoreConverter<T>,
        _ => throw StoreUnkownConverterException(this, T),
      };
}

class StoreUpdateEvent<T> {
  final StoreKey<T> key;
  final T value;

  const StoreUpdateEvent(this.key, this.value);
}
