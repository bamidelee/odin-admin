import { gql } from '@apollo/client'

export const FIND_USER = gql`
   query findUserByUsername($username: String){
        findUser(username: $username){
            username
            name
            email
            _id
            verified
        }
    }
`

export const CURRENT_USER = gql`
    query CurrentUser{
        currentUser{
            username
            name
            email
            _id
            verified
        } 
    }
`

export const SEARCH_DASHPOST = gql`
    query searchDashPostByTitle($title: String){
        searchDashpost(title: $title){
            text
            title
            primaryMedia
            date
            type
            trending
            postID
            _id
            genre
        }
    }
`

export const DASHPOST = gql`
    query dashPost{
        text
        title
        primaryMedia
        date
        type
        trending
        postID
        _id
        genre
    }
`

export const FIND_POST = gql`
    query findPPostById($id: ID){
        findPost(id: $id){
            text
            title
            date
            _id
            primaryMedia
            secondaryMedia
            secondaryMediaType
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }

                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                            comments{
                                text
                                sender{
                                    username
                                    name
                                    email
                                    _id
                                    verified
                                }
                                _id
                                date
                                likes{
                                    username
                                    _id
                                }
                                thumbsUp{
                                    username
                                    _id
                                }
                                hate{
                                    username
                                    _id
                                }
                                sad{
                                    username
                                    _id
                                }
                                funny{
                                    username
                                    _id
                                }
                            }
                        }
                    }
                }
            }
            genre
        }
    }
`

export const FIND_MOVIE = gql`
    query findMovieById($id: ID){
        findMovie(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            language
            stars
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }
                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                        }
                    }
                }
            }
            releaseDate
            genre
            _id
            country
            director
        }
    }
`

export const FIND_MUSIC = gql`
    query findMusicById($id: ID){
        findMusic(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            stars
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }
                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                        }
                    }
                }
            }
            label
            _id
        }
    }
`

export const FIND_SERIES = gql`
    query findSeriesById($id: ID){
        findSeries(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            language
            stars
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }
                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                         comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                        }
                    }
                    }
                }
            
            }
            releaseDate
            genre
            season
            episode
            episodeTitle
            next{
                title
                primaryMedia
            }
            previous{
                title
                primaryMedia
            }
            _id
            country
            director
        }
    }
`

export const TRENDING = gql`
    query trending{
        text
        title
        primaryMedia
        date
        type
        trending
        postID
        _id
        genre
    }
`

export const RESET_PASSWORD = gql`
    mutation resetPasswordByEmail($email: String!){
        resetPassword(email: $email){
            username
        }
    }
`

export const PASSWORD_CHANGE = gql`
    mutation chnagePasswordOnEmail($password: String, $resetToken: String){
        passwordChange(passwod: $password, resetToken: $ resetToken){
            value
        }
    }
`

export const SIGNUP = gql`
    mutation signUpByEmail($name: String!, $email: String!, $username: String!, $password: String!){
        signUp(name: $name, email: $email, username: $username, password: $password){
           value
        }
    }
`

export const SIGNIN = gql`
    mutation signInByUsername($username: String!, $password: String!){
        signIn( username: $username, password: $password){
           value
        }
    }
`

export const CREATE_POST = gql`
    mutation createNewPost($description: String!, $title: String!, $primaryMedia: String!, $secondaryMedia: String, $secondaryMediaType: String, $genre: [String!]){
        createPost(description: $description, title: $title, primaryMedia: $primaryMedia, secondaryMedia: $secondaryMedia, secondaryMediaType: $secondaryMediaType, genre: $genre){
            title
        }
    }
`

export const CREATE_MUSIC = gql`
    mutation createMusic($description: String!, $title: String!, $primaryMedia: String!, $secondaryMedia: String!, $genre: [String!], $stars: [String!], $label: String, $album: String, $trackNumber: String){
        createMusic(description: $description, title: $title, primaryMedia: $primaryMedia, secondaryMedia: $secondaryMedia,  genre: $genre, stars: $stars, label: $label, album: $album, trackNumber: $trackNumber){
            title
        }
    }
`

export const CREATE_MOVIE = gql`
    mutation createMovie($description: String!, $title: String!, $primaryMedia: String!, $secondaryMedia: String!, $language: String!, $stars: [String!], $releaseDate: Date!, $genre: [String!], $source: String, $country: String!, $director: String, $trailer: String, $request: String!){
        createMovie(description: $description, title: $title, primaryMedia: $primaryMedia, secondaryMedia: $secondaryMedia,language: $language, stars: $stars, releaseDate: $releaseDate, genre: $genre, source: $source, country: $country, director: $director, trailer: $trailer, request: $request){
            title
        }
    }
`

export const CREATE_SERIES = gql`
    mutation createSeries($description: String!, $title: String!, $primaryMedia: String!, $secondaryMedia: String!, $language: String!, $stars: [String!], $releaseDate: Date!, $genre: [String!], $source: String, $season: String!, $episode: String!, $episodeTitle: String!, $country: String!, $director: String, $trailer: String, $request: String!){
        createSeries(description: $description, title: $title, primaryMedia: $primaryMedia, secondaryMedia: $secondaryMedia,language: $language, stars: $stars, releaseDate: $releaseDate, genre: $genre, source: $source, season: $season, episode: $episode, episodeTitle: $episodeTitle country: $country, director: $director, trailer: $trailer, request: $request){
            title
        }
    }
`

export const CREATE_COMMENT = gql`
    mutation createComment($text: String, $sender: ID, $postID: String, $postType: String ){
        createComment(text: $text, sender: $sender, postID: $postID, postType: $postType){
            text
            sender{
                username
                name
                email
                _id
                verified
            }
            _id
            date

        }
    }
`
export const CREATE_TABLE = gql`
    mutation createTable($table: String!, $league: String!, $sport: String!){
        createTable(table: $table, league: $league, sport: $sport){
            table
        }
    }
`

export const CREATE_FIXTURE = gql`
    mutation createFixture($fixture: String!, $league: String!, $sport: String!){
        createFixture(fixture: $fixture, league: $league, sport: $sport){
            fixture
        }
    }
`

export const LIKE = gql`
    mutation like($id: ID){
        like(id: $id){
            _id
        }
    }
`

export const THUMBS_UP = gql`
    mutation thumbsUp($id: ID){
        thumbsUp(id: $id){
            _id
        }
    }
`

export const HATE = gql`
    mutation hate($id: ID){
        hate(id: $id){
            _id
        }
    }
`

export const FUNNY = gql`
    mutation funny($id: ID){
        funny(id: $id){
            _id
        }
    }
`

export const SAD = gql`
    mutation sad($id: ID){
        sad(id: $id){
            _id
        }
    }
`

export const CREATE_TREND = gql`
    mutation createTrend($postID: ID){
        createPost(postID: $postID){
            _id
        }
    }
`