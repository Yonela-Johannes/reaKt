/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
