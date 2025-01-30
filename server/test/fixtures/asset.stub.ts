import { AssetFileEntity } from 'src/entities/asset-files.entity';
import { AssetEntity } from 'src/entities/asset.entity';
import { ExifEntity } from 'src/entities/exif.entity';
import { StackEntity } from 'src/entities/stack.entity';
import { AssetFileType, AssetStatus, AssetType } from 'src/enum';
import { authStub } from 'test/fixtures/auth.stub';
import { fileStub } from 'test/fixtures/file.stub';
import { libraryStub } from 'test/fixtures/library.stub';
import { userStub } from 'test/fixtures/user.stub';

const previewFile: AssetFileEntity = {
  id: 'file-1',
  assetId: 'asset-id',
  type: AssetFileType.PREVIEW,
  path: '/uploads/user-id/thumbs/path.jpg',
  createdAt: new Date('2023-02-23T05:06:29.716Z'),
  updatedAt: new Date('2023-02-23T05:06:29.716Z'),
};

const thumbnailFile: AssetFileEntity = {
  id: 'file-2',
  assetId: 'asset-id',
  type: AssetFileType.THUMBNAIL,
  path: '/uploads/user-id/webp/path.ext',
  createdAt: new Date('2023-02-23T05:06:29.716Z'),
  updatedAt: new Date('2023-02-23T05:06:29.716Z'),
};

const files: AssetFileEntity[] = [previewFile, thumbnailFile];

export const stackStub = (stackId: string, assets: AssetEntity[]): StackEntity => {
  return {
    id: stackId,
    assets,
    owner: assets[0].owner,
    ownerId: assets[0].ownerId,
    primaryAsset: assets[0],
    primaryAssetId: assets[0].id,
  };
};

export const assetStub = {
  noResizePath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    originalFileName: 'IMG_123.jpg',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_123.jpg',
    files: [thumbnailFile],
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    deletedAt: null,
    isExternal: false,
    duplicateId: null,
    isOffline: false,
  }),

  noWebpPath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_456.jpg',
    files: [previewFile],
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'IMG_456.jpg',
    faces: [],
    sidecarPath: null,
    isExternal: false,
    exifInfo: {
      fileSizeInByte: 123_000,
    } as ExifEntity,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  noThumbhash: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    files,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  primaryImage: Object.freeze<AssetEntity>({
    id: 'primary-asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.admin,
    ownerId: 'admin-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    files,
    type: AssetType.IMAGE,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      exifImageHeight: 1000,
      exifImageWidth: 1000,
    } as ExifEntity,
    stack: stackStub('stack-1', [
      { id: 'primary-asset-id' } as AssetEntity,
      { id: 'stack-child-asset-1' } as AssetEntity,
      { id: 'stack-child-asset-2' } as AssetEntity,
    ]),
    duplicateId: null,
    isOffline: false,
  }),

  image: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    files,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2025-01-01T01:02:03.456Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      exifImageHeight: 3840,
      exifImageWidth: 2160,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  trashed: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    deletedAt: new Date('2023-02-24T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: false,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      exifImageHeight: 3840,
      exifImageWidth: 2160,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
    status: AssetStatus.TRASHED,
  }),

  trashedOffline: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    deletedAt: new Date('2023-02-24T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: false,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      exifImageHeight: 3840,
      exifImageWidth: 2160,
    } as ExifEntity,
    duplicateId: null,
    isOffline: true,
  }),
  archived: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: true,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      exifImageHeight: 3840,
      exifImageWidth: 2160,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  external: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    checksum: Buffer.from('path hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  image1: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    deletedAt: null,
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isExternal: false,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  imageFrom2015: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2015-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2015-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    files,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2015-02-23T05:06:29.716Z'),
    updatedAt: new Date('2015-02-23T05:06:29.716Z'),
    localDateTime: new Date('2015-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  video: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    files: [previewFile],
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
      exifImageHeight: 2160,
      exifImageWidth: 3840,
    } as ExifEntity,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  livePhotoMotionAsset: Object.freeze({
    status: AssetStatus.ACTIVE,
    id: fileStub.livePhotoMotion.uuid,
    originalPath: fileStub.livePhotoMotion.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.VIDEO,
    isVisible: false,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    exifInfo: {
      fileSizeInByte: 100_000,
      timeZone: `America/New_York`,
    },
  } as AssetEntity),

  livePhotoStillAsset: Object.freeze({
    id: 'live-photo-still-asset',
    status: AssetStatus.ACTIVE,
    originalPath: fileStub.livePhotoStill.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.IMAGE,
    livePhotoVideoId: 'live-photo-motion-asset',
    isVisible: true,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    exifInfo: {
      fileSizeInByte: 25_000,
      timeZone: `America/New_York`,
    },
  } as AssetEntity),

  livePhotoWithOriginalFileName: Object.freeze({
    id: 'live-photo-still-asset',
    status: AssetStatus.ACTIVE,
    originalPath: fileStub.livePhotoStill.originalPath,
    originalFileName: fileStub.livePhotoStill.originalName,
    ownerId: authStub.user1.user.id,
    type: AssetType.IMAGE,
    livePhotoVideoId: 'live-photo-motion-asset',
    isVisible: true,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    exifInfo: {
      fileSizeInByte: 25_000,
      timeZone: `America/New_York`,
    },
  } as AssetEntity),

  withLocation: Object.freeze<AssetEntity>({
    id: 'asset-with-favorite-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-22T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-22T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    checksum: Buffer.from('file hash', 'utf8'),
    originalPath: '/original/path.ext',
    sidecarPath: null,
    type: AssetType.IMAGE,
    files: [previewFile],
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-22T05:06:29.716Z'),
    updatedAt: new Date('2023-02-22T05:06:29.716Z'),
    localDateTime: new Date('2020-12-31T23:59:00.000Z'),
    isFavorite: false,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    exifInfo: {
      latitude: 100,
      longitude: 100,
      fileSizeInByte: 23_456,
      city: 'test-city',
      state: 'test-state',
      country: 'test-country',
    } as ExifEntity,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  sidecar: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files: [previewFile],
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  sidecarWithoutExt: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files: [previewFile],
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.xmp',
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  hasEncodedVideo: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    files: [previewFile],
    thumbhash: null,
    encodedVideoPath: '/encoded/video/path.mp4',
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    deletedAt: null,
    duplicateId: null,
    isOffline: false,
  }),

  hasFileExtension: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'photo.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  imageDng: Object.freeze<AssetEntity>({
    id: 'asset-id',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.dng',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      profileDescription: 'Adobe RGB',
      bitsPerSample: 14,
    } as ExifEntity,
    duplicateId: null,
    isOffline: false,
  }),

  hasEmbedding: Object.freeze<AssetEntity>({
    id: 'asset-id-embedding',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    duplicateId: null,
    smartSearch: {
      assetId: 'asset-id',
      embedding: '[1, 2, 3, 4]',
    },
    isOffline: false,
  }),

  hasDupe: Object.freeze<AssetEntity>({
    id: 'asset-id-dupe',
    status: AssetStatus.ACTIVE,
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    files,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    duplicateId: 'duplicate-id',
    smartSearch: {
      assetId: 'asset-id',
      embedding: '[1, 2, 3, 4]',
    },
    isOffline: false,
  }),
};
