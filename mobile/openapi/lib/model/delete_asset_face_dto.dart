//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class DeleteAssetFaceDto {
  /// Returns a new [DeleteAssetFaceDto] instance.
  DeleteAssetFaceDto({
    required this.assetFaceId,
    required this.personId,
  });

  String assetFaceId;

  String personId;

  @override
  bool operator ==(Object other) => identical(this, other) || other is DeleteAssetFaceDto &&
    other.assetFaceId == assetFaceId &&
    other.personId == personId;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (assetFaceId.hashCode) +
    (personId.hashCode);

  @override
  String toString() => 'DeleteAssetFaceDto[assetFaceId=$assetFaceId, personId=$personId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'assetFaceId'] = this.assetFaceId;
      json[r'personId'] = this.personId;
    return json;
  }

  /// Returns a new [DeleteAssetFaceDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static DeleteAssetFaceDto? fromJson(dynamic value) {
    upgradeDto(value, "DeleteAssetFaceDto");
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return DeleteAssetFaceDto(
        assetFaceId: mapValueOfType<String>(json, r'assetFaceId')!,
        personId: mapValueOfType<String>(json, r'personId')!,
      );
    }
    return null;
  }

  static List<DeleteAssetFaceDto> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <DeleteAssetFaceDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = DeleteAssetFaceDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, DeleteAssetFaceDto> mapFromJson(dynamic json) {
    final map = <String, DeleteAssetFaceDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = DeleteAssetFaceDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of DeleteAssetFaceDto-objects as value to a dart map
  static Map<String, List<DeleteAssetFaceDto>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<DeleteAssetFaceDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = DeleteAssetFaceDto.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'assetFaceId',
    'personId',
  };
}

