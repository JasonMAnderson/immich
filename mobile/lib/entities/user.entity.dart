import 'dart:ui';

import 'package:immich_mobile/domain/dtos/user.dto.dart' as nu;
import 'package:immich_mobile/entities/album.entity.dart';
import 'package:immich_mobile/utils/hash.dart';
import 'package:isar/isar.dart';
import 'package:openapi/api.dart';

part 'user.entity.g.dart';

@Collection(inheritance: false)
class User {
  User({
    required this.id,
    required this.updatedAt,
    required this.email,
    required this.name,
    required this.isAdmin,
    this.isPartnerSharedBy = false,
    this.isPartnerSharedWith = false,
    this.profileImagePath = '',
    this.avatarColor = AvatarColorEnum.primary,
    this.memoryEnabled = true,
    this.inTimeline = false,
    this.quotaUsageInBytes = 0,
    this.quotaSizeInBytes = 0,
  });

  Id get isarId => fastHash(id);

  nu.UserDto toDTO() => nu.UserDto(
        dbId: isarId,
        id: id,
        name: name,
        email: email,
        isAdmin: isAdmin,
        updatedAt: updatedAt,
        avatarColor: avatarColor.toAvatarColor(),
        profileImagePath: profileImagePath,
        memoryEnabled: memoryEnabled,
        inTimeline: inTimeline,
        quotaSizeInBytes: quotaSizeInBytes,
        quotaUsageInBytes: quotaUsageInBytes,
      );

  User.fromUserDto(
    UserAdminResponseDto dto,
    UserPreferencesResponseDto? preferences,
  )   : id = dto.id,
        updatedAt = dto.updatedAt,
        email = dto.email,
        name = dto.name,
        isPartnerSharedBy = false,
        isPartnerSharedWith = false,
        profileImagePath = dto.profileImagePath,
        isAdmin = dto.isAdmin,
        memoryEnabled = preferences?.memories.enabled ?? false,
        avatarColor = dto.avatarColor.toAvatarColor(),
        inTimeline = false,
        quotaUsageInBytes = dto.quotaUsageInBytes ?? 0,
        quotaSizeInBytes = dto.quotaSizeInBytes ?? 0;

  User.fromPartnerDto(PartnerResponseDto dto)
      : id = dto.id,
        updatedAt = DateTime.now(),
        email = dto.email,
        name = dto.name,
        isPartnerSharedBy = false,
        isPartnerSharedWith = false,
        profileImagePath = dto.profileImagePath,
        isAdmin = false,
        memoryEnabled = false,
        avatarColor = dto.avatarColor.toAvatarColor(),
        inTimeline = dto.inTimeline ?? false,
        quotaUsageInBytes = 0,
        quotaSizeInBytes = 0;

  /// Base user dto used where the complete user object is not required
  User.fromSimpleUserDto(UserResponseDto dto)
      : id = dto.id,
        email = dto.email,
        name = dto.name,
        profileImagePath = dto.profileImagePath,
        avatarColor = dto.avatarColor.toAvatarColor(),
        // Fill the remaining fields with placeholders
        isAdmin = false,
        inTimeline = false,
        memoryEnabled = false,
        isPartnerSharedBy = false,
        isPartnerSharedWith = false,
        updatedAt = DateTime.now(),
        quotaUsageInBytes = 0,
        quotaSizeInBytes = 0;

  @Index(unique: true, replace: false, type: IndexType.hash)
  String id;
  DateTime updatedAt;
  String email;
  String name;
  bool isPartnerSharedBy;
  bool isPartnerSharedWith;
  bool isAdmin;
  String profileImagePath;
  @Enumerated(EnumType.ordinal)
  AvatarColorEnum avatarColor;
  bool memoryEnabled;
  bool inTimeline;
  int quotaUsageInBytes;
  int quotaSizeInBytes;

  bool get hasQuota => quotaSizeInBytes > 0;
  @Backlink(to: 'owner')
  final IsarLinks<Album> albums = IsarLinks<Album>();
  @Backlink(to: 'sharedUsers')
  final IsarLinks<Album> sharedAlbums = IsarLinks<Album>();

  @override
  bool operator ==(other) {
    if (other is! User) return false;
    return id == other.id &&
        updatedAt.isAtSameMomentAs(other.updatedAt) &&
        avatarColor == other.avatarColor &&
        email == other.email &&
        name == other.name &&
        isPartnerSharedBy == other.isPartnerSharedBy &&
        isPartnerSharedWith == other.isPartnerSharedWith &&
        profileImagePath == other.profileImagePath &&
        isAdmin == other.isAdmin &&
        memoryEnabled == other.memoryEnabled &&
        inTimeline == other.inTimeline &&
        quotaUsageInBytes == other.quotaUsageInBytes &&
        quotaSizeInBytes == other.quotaSizeInBytes;
  }

  @override
  @ignore
  int get hashCode =>
      id.hashCode ^
      updatedAt.hashCode ^
      email.hashCode ^
      name.hashCode ^
      isPartnerSharedBy.hashCode ^
      isPartnerSharedWith.hashCode ^
      profileImagePath.hashCode ^
      avatarColor.hashCode ^
      isAdmin.hashCode ^
      memoryEnabled.hashCode ^
      inTimeline.hashCode ^
      quotaUsageInBytes.hashCode ^
      quotaSizeInBytes.hashCode;
}

enum AvatarColorEnum {
  // do not change this order or reuse indices for other purposes, adding is OK
  primary,
  pink,
  red,
  yellow,
  blue,
  green,
  purple,
  orange,
  gray,
  amber,
}

extension AvatarColorEnumHelper on UserAvatarColor {
  AvatarColorEnum toAvatarColor() {
    switch (this) {
      case UserAvatarColor.primary:
        return AvatarColorEnum.primary;
      case UserAvatarColor.pink:
        return AvatarColorEnum.pink;
      case UserAvatarColor.red:
        return AvatarColorEnum.red;
      case UserAvatarColor.yellow:
        return AvatarColorEnum.yellow;
      case UserAvatarColor.blue:
        return AvatarColorEnum.blue;
      case UserAvatarColor.green:
        return AvatarColorEnum.green;
      case UserAvatarColor.purple:
        return AvatarColorEnum.purple;
      case UserAvatarColor.orange:
        return AvatarColorEnum.orange;
      case UserAvatarColor.gray:
        return AvatarColorEnum.gray;
      case UserAvatarColor.amber:
        return AvatarColorEnum.amber;
    }
    return AvatarColorEnum.primary;
  }
}

extension AvatarColorEnumHelperDto on nu.UserAvatarColor {
  AvatarColorEnum toAvatarColor() => switch (this) {
        nu.UserAvatarColor.primary => AvatarColorEnum.primary,
        nu.UserAvatarColor.pink => AvatarColorEnum.pink,
        nu.UserAvatarColor.red => AvatarColorEnum.red,
        nu.UserAvatarColor.yellow => AvatarColorEnum.yellow,
        nu.UserAvatarColor.blue => AvatarColorEnum.blue,
        nu.UserAvatarColor.green => AvatarColorEnum.green,
        nu.UserAvatarColor.purple => AvatarColorEnum.purple,
        nu.UserAvatarColor.orange => AvatarColorEnum.orange,
        nu.UserAvatarColor.gray => AvatarColorEnum.gray,
        nu.UserAvatarColor.amber => AvatarColorEnum.amber,
      };
}

extension AvatarColorEnumHelperToDto on AvatarColorEnum {
  nu.UserAvatarColor toAvatarColor() => switch (this) {
        AvatarColorEnum.primary => nu.UserAvatarColor.primary,
        AvatarColorEnum.pink => nu.UserAvatarColor.pink,
        AvatarColorEnum.red => nu.UserAvatarColor.red,
        AvatarColorEnum.yellow => nu.UserAvatarColor.yellow,
        AvatarColorEnum.blue => nu.UserAvatarColor.blue,
        AvatarColorEnum.green => nu.UserAvatarColor.green,
        AvatarColorEnum.purple => nu.UserAvatarColor.purple,
        AvatarColorEnum.orange => nu.UserAvatarColor.orange,
        AvatarColorEnum.gray => nu.UserAvatarColor.gray,
        AvatarColorEnum.amber => nu.UserAvatarColor.amber,
      };
}

extension ToOldEntity on nu.UserDto {
  User toOldEntity() => User(
        id: id,
        updatedAt: updatedAt,
        email: email,
        name: name,
        isAdmin: isAdmin,
        isPartnerSharedBy: isPartnerSharedBy,
        isPartnerSharedWith: isPartnerSharedWith,
        profileImagePath: profileImagePath,
        avatarColor: avatarColor.toAvatarColor(),
        memoryEnabled: memoryEnabled,
        inTimeline: inTimeline,
        quotaUsageInBytes: quotaUsageInBytes,
        quotaSizeInBytes: quotaSizeInBytes,
      );
}

extension AvatarColorToColorHelper on AvatarColorEnum {
  Color toColor([bool isDarkTheme = false]) {
    switch (this) {
      case AvatarColorEnum.primary:
        return isDarkTheme ? const Color(0xFFABCBFA) : const Color(0xFF4250AF);
      case AvatarColorEnum.pink:
        return const Color.fromARGB(255, 244, 114, 182);
      case AvatarColorEnum.red:
        return const Color.fromARGB(255, 239, 68, 68);
      case AvatarColorEnum.yellow:
        return const Color.fromARGB(255, 234, 179, 8);
      case AvatarColorEnum.blue:
        return const Color.fromARGB(255, 59, 130, 246);
      case AvatarColorEnum.green:
        return const Color.fromARGB(255, 22, 163, 74);
      case AvatarColorEnum.purple:
        return const Color.fromARGB(255, 147, 51, 234);
      case AvatarColorEnum.orange:
        return const Color.fromARGB(255, 234, 88, 12);
      case AvatarColorEnum.gray:
        return const Color.fromARGB(255, 75, 85, 99);
      case AvatarColorEnum.amber:
        return const Color.fromARGB(255, 217, 119, 6);
    }
  }
}
