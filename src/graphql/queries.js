/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      likes
      loves
      comment
      videoID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        name
        image
        followers
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Videos {
          nextToken
          startedAt
        }
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        download
        share
        love
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          followers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likes
        loves
        comment
        videoID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        User {
          id
          name
          image
          followers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Video {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          download
          share
          love
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        likes
        loves
        comment
        videoID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        User {
          id
          name
          image
          followers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Video {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          download
          share
          love
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      followers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          download
          share
          love
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        followers
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Videos {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        followers
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Videos {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      download
      share
      love
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          likes
          loves
          comment
          videoID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        image
        followers
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Videos {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        download
        share
        love
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          followers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        download
        share
        love
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          followers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
