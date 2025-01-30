-- NOTE: This file is auto generated by ./sql-generator

-- SharedLinkRepository.get
select
  "shared_links".*,
  coalesce(
    json_agg("a") filter (
      where
        "a"."id" is not null
    ),
    '[]'
  ) as "assets",
  to_json("album") as "album"
from
  "shared_links"
  left join lateral (
    select
      "assets".*,
      to_json("exifInfo") as "exifInfo"
    from
      "shared_link__asset"
      inner join "assets" on "assets"."id" = "shared_link__asset"."assetsId"
      inner join lateral (
        select
          "exif".*
        from
          "exif"
        where
          "exif"."assetId" = "assets"."id"
      ) as "exifInfo" on true
    where
      "shared_links"."id" = "shared_link__asset"."sharedLinksId"
      and "assets"."deletedAt" is null
    order by
      "assets"."fileCreatedAt" asc
  ) as "a" on true
  left join lateral (
    select
      "albums".*,
      coalesce(
        json_agg("assets") filter (
          where
            "assets"."id" is not null
        ),
        '[]'
      ) as "assets",
      to_json("owner") as "owner"
    from
      "albums"
      left join "albums_assets_assets" on "albums_assets_assets"."albumsId" = "albums"."id"
      left join lateral (
        select
          "assets".*,
          to_json("assets_exifInfo") as "exifInfo"
        from
          "assets"
          inner join lateral (
            select
              "exif".*
            from
              "exif"
            where
              "exif"."assetId" = "assets"."id"
          ) as "assets_exifInfo" on true
        where
          "albums_assets_assets"."assetsId" = "assets"."id"
          and "assets"."deletedAt" is null
        order by
          "assets"."fileCreatedAt" asc
      ) as "assets" on true
      inner join lateral (
        select
          "users".*
        from
          "users"
        where
          "users"."id" = "albums"."ownerId"
          and "users"."deletedAt" is null
      ) as "owner" on true
    where
      "albums"."id" = "shared_links"."albumId"
      and "albums"."deletedAt" is null
    group by
      "albums"."id",
      "owner".*
  ) as "album" on true
where
  "shared_links"."id" = $1
  and "shared_links"."userId" = $2
  and (
    "shared_links"."type" = $3
    or "album"."id" is not null
  )
group by
  "shared_links"."id",
  "album".*
order by
  "shared_links"."createdAt" desc

-- SharedLinkRepository.getAll
select distinct
  on ("shared_links"."createdAt") "shared_links".*,
  to_json("album") as "album"
from
  "shared_links"
  left join "shared_link__asset" on "shared_link__asset"."sharedLinksId" = "shared_links"."id"
  left join lateral (
    select
      "assets".*
    from
      "assets"
    where
      "assets"."id" = "shared_link__asset"."assetsId"
      and "assets"."deletedAt" is null
  ) as "assets" on true
  left join lateral (
    select
      "albums".*,
      to_json("owner") as "owner"
    from
      "albums"
      inner join lateral (
        select
          "users"."id",
          "users"."email",
          "users"."createdAt",
          "users"."profileImagePath",
          "users"."isAdmin",
          "users"."shouldChangePassword",
          "users"."deletedAt",
          "users"."oauthId",
          "users"."updatedAt",
          "users"."storageLabel",
          "users"."name",
          "users"."quotaSizeInBytes",
          "users"."quotaUsageInBytes",
          "users"."status",
          "users"."profileChangedAt"
        from
          "users"
        where
          "users"."id" = "albums"."ownerId"
          and "users"."deletedAt" is null
      ) as "owner" on true
    where
      "albums"."id" = "shared_links"."albumId"
      and "albums"."deletedAt" is null
  ) as "album" on true
where
  "shared_links"."userId" = $1
  and (
    "shared_links"."type" = $2
    or "album"."id" is not null
  )
order by
  "shared_links"."createdAt" desc

-- SharedLinkRepository.getByKey
select
  "shared_links".*,
  (
    select
      to_json(obj)
    from
      (
        select
          "users"."id",
          "users"."email",
          "users"."createdAt",
          "users"."profileImagePath",
          "users"."isAdmin",
          "users"."shouldChangePassword",
          "users"."deletedAt",
          "users"."oauthId",
          "users"."updatedAt",
          "users"."storageLabel",
          "users"."name",
          "users"."quotaSizeInBytes",
          "users"."quotaUsageInBytes",
          "users"."status",
          "users"."profileChangedAt"
        from
          "users"
        where
          "users"."id" = "shared_links"."userId"
      ) as obj
  ) as "user"
from
  "shared_links"
  left join "albums" on "albums"."id" = "shared_links"."albumId"
where
  "shared_links"."key" = $1
  and "albums"."deletedAt" is null
  and (
    "shared_links"."type" = $2
    or "albums"."id" is not null
  )
