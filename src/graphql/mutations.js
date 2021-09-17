/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
