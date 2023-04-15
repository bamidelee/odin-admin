import { useQuery, useMutation } from "@apollo/client";
import { Formik } from 'formik';
import { useEffect, useState } from "react";
import { CREATE_POST, CREATE_MUSIC, CREATE_MOVIE, CREATE_SERIES, CREATE_TABLE, createFixture, CREATE_FIXTURE } from "./quarries";
import '../styles/upload.css'
export default function Upload() {

    const [apolloError, setApolloError] = useState('')
    const [formToSow, setFormToShow] = useState('post')
    const [genres, setGenres] = useState([])
    const [stars, setStars] = useState([])
    const [uploadSuccessful, setUploadSuccessful] = useState(false)
    const [createPost, { data: createPostData, loading: createPostLoading, error: createPostError }] = useMutation(CREATE_POST)
    const [createMusic, { data: createMusicData, loading: createMusicLoading, error: createMusicError }] = useMutation(CREATE_MUSIC)
    const [createMovie, { data: createMovieData, loading: createMovieLoading, error: createMovieError }] = useMutation(CREATE_MOVIE)
    const [createSeries, { data: createSeriesData, loading: createSeriesLoading, error: createSeriesError }] = useMutation(CREATE_SERIES)
    const [createTable, { data: createTableData, loading: createTableLoading, error: createTableError }] = useMutation(CREATE_TABLE)
    const [createFixture, { data: createFixtureData, loading: createFixtureLoading, error: createFixtureError }] = useMutation(CREATE_FIXTURE)
    const onSubmit = (values) => {

        setApolloError('')
        if (formToSow === 'post') {
            createPost({ variables: { description: values.description, title: values.title, primaryMedia: values.primaryMedia, secondaryMedia: values.secondaryMedia, secondaryMediaType: values.secondaryMediaType, genre: values.genre.split(',') } })
        }

        if (formToSow === 'music') {
            createMusic({ variables: { description: values.description, title: values.title, primaryMedia: values.primaryMedia, secondaryMedia: values.secondaryMedia, genre: values.genre.split(','), star: values.stars.split(','), label: values.label, album: values.album, trackNumber: values.trackNumber } })
        }

        if (formToSow === 'movie') {
            createMovie({ variables: { description: values.description, title: values.title, primaryMedia: values.primaryMedia, secondaryMedia: values.secondaryMedia, language: values.language, stars: values.stars.split(','), releaseDate: values.releaseDate, source: values.source, genre: values.genre.split(','), country: values.country, director: values.director, trailer: values.trailer } })
        }

        if (formToSow === 'series') {
            createSeries({ variables: { description: values.description, title: values.title, primaryMedia: values.primaryMedia, secondaryMedia: values.secondaryMedia, language: values.language, stars: values.stars.split(','), releaseDate: values.releaseDate, source: values.source, season: values.season, episode: values.episode, episodeTitle: values.episodeTitle, genre: values.genre.split(','), country: values.country, director: values.director, trailer: values.trailer } })
        }

        if (formToSow === 'table') {
            createTable({ variables: { table: values.table, league: values.league, sport: values.sport } })
        }

        if (formToSow === 'fixture') {
            createFixture({ variables: { fixture: values.table, league: values.league, sport: values.sport } })
        }
    }

    useEffect(() => {
        if (createPostData || createMovieData || createMusicData || createSeriesData || createTableData || createFixtureData) {
            setUploadSuccessful(true)
        }
    }, [createPostData, createMovieData, createMusicData, createSeriesData, createTableData, createFixtureData])

    useEffect(() => {
        if (createPostError) {
            setApolloError(createPostError.message)
        }

        if (createMovieError) {
            setApolloError(createMovieError.message)
        }

        if (createMusicError) {
            setApolloError(createMusicError.message)
        }

        if (createSeriesError) {
            setApolloError(createSeriesError.message)
        }

        if (createTableError) {
            setApolloError(createTableError.message)
        }

        if (createFixtureError) {
            setApolloError(createFixtureError.message)
        }
    }, [createPostError, createMovieError, createMusicError, createSeriesError, createTableError, createFixtureError])

    return (
        <div className="upload">
            <div className='formControl'>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('post')
                }} className={formToSow === 'post' ? 'activeForm' : ''}>Post</button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('movie')
                }} className={formToSow === 'movie' ? 'activeForm' : ''}>Movie
                </button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('music')
                }} className={formToSow === 'music' ? 'activeForm' : ''}>Music
                </button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('series')
                }} className={formToSow === 'series' ? 'activeForm' : ''}>Series
                </button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('table')
                }} className={formToSow === 'table' ? 'activeForm' : ''}>Table
                </button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('fixture')
                }} className={formToSow === 'fixture' ? 'activeForm' : ''}>Fixture
                </button>
            </div>
            <div className="apolloError">{apolloError}</div>
            <Formik
                initialValues={{ description: '', title: '', primaryMedia: '', secondaryMedia: '', secondaryMediaType: '', genre: '', releaseDate: '', source: '', country: '', director: '', season: '', episode: '', episodeTitle: '', stars: '', label: '', releaseDate: '', language: '', album: '', trackNumber: '', table: '', league: '', sport: '', trailer: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.description) {
                        errors.description = 'Required*'
                    }

                    if (!values.title) {
                        errors.title = 'Required*'
                    }

                    if (!values.primaryMedia) {
                        errors.primaryMedia = 'Required'
                    }

                    if (!values.secondaryMedia) {
                        errors.secondaryMedia = 'Required'
                    }

                    if (!values.genre) {
                        errors.genre = 'Required'
                    }
                }}

                onSubmit={onSubmit}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }
                ) => (
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        {(formToSow === 'post' || formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <textarea
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                placeholder=' '
                            >
                            </textarea>
                            <label htmlFor="description">Description</label>
                        </div>}

                        {(formToSow === 'post' || formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                placeholder=' '
                            />
                            <label htmlFor="title">Title</label>
                        </div>}

                        {(formToSow === 'post' || formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="primaryMedia"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.primaryMedia}
                                placeholder=' '
                            />
                            <label htmlFor="primaryMedia">Primary media</label>
                        </div>}

                        {(formToSow === 'post' || formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="secondaryMedia"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondaryMedia}
                                placeholder=' '
                            />
                            <label htmlFor="secondaryMedia">Secondary media</label>
                        </div>}

                        {(formToSow === 'post') && <div className="inputContainer">
                            <input
                                type="text"
                                name="secondaryMediaType"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondaryMediaType}
                                placeholder=' '
                            />
                            <label htmlFor="secondaryMediaType">Secondary media type</label>
                        </div>}

                        {(formToSow === 'post' || formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="genre"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.genre}
                                placeholder=' '
                            />
                            <label htmlFor="genre">Genre</label>

                        </div>}

                        {genres.length >= 1 && <div className="genreList">
                            {genres.map((genre, index) =>
                                <div key={index} className='genreItem'>
                                    {genre}
                                    <span className="material-symbols-outlined" onClick={() => {
                                        setGenres(genres.filter((item) => item !== genre))
                                    }}>
                                        close
                                    </span>
                                </div>
                            )}
                        </div>}

                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="date"
                                name="releaseDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.releaseDate}
                            />
                            <label htmlFor="releaseDate">Release date</label>
                        </div>}

                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="source"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.source}
                                placeholder=' '
                            />
                            <label htmlFor="source">Source</label>
                        </div>}

                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                placeholder=' '
                            />
                            <label htmlFor="country">Country</label>
                        </div>
                        }
                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="director"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.director}
                                placeholder=' '
                            />
                            <label htmlFor="director">Director</label>
                        </div>}

                        {(formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="season"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.season}
                                placeholder=' '
                            />
                            <label htmlFor="season">Season</label>
                        </div>}

                        {formToSow === 'series' && <div className="inputContainer">
                            <input
                                type="text"
                                name="episode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.episode}
                                placeholder=' '
                            />
                            <label htmlFor="episode">Episode</label>
                        </div>}

                        {formToSow === 'series' && <div className="inputContainer">
                            <input
                                type="text"
                                name="episodeTitle"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.episodeTitle}
                                placeholder=' '
                            />
                            <label htmlFor="episodeTitle">Episode title</label>
                        </div>}

                        {(formToSow === 'music' || formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="stars"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.stars}
                                placeholder=' '
                            />
                            <label htmlFor="stars">Stars</label>

                        </div>}

                        {stars.length >= 1 && <div className="genreList">
                            {stars.map((star, index) =>
                                <div key={index} className='genreItem'>
                                    {star}
                                    <span className="material-symbols-outlined" onClick={() => {
                                        setStars(stars.filter((item) => item !== star))
                                    }}>
                                        close
                                    </span>
                                </div>
                            )}
                        </div>}

                        {(formToSow === 'music') && <div className="inputContainer">
                            <input
                                type="text"
                                name="label"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.label}
                                placeholder=' '
                            />
                            <label htmlFor="label">label</label>
                        </div>}

                        {formToSow === 'music' && <div className="inputContainer">
                            <input
                                type="text"
                                name="album"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.album}
                                placeholder=' '
                            />
                            <label htmlFor="album">Album</label>
                        </div>}

                        {formToSow === 'music' && <div className="inputContainer">
                            <input
                                type="text"
                                name="trackNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.trackNumber}
                                placeholder=' '
                            />
                            <label htmlFor="trackNumber">Track number</label>
                        </div>}

                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="language"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.language}
                                placeholder=' '
                            />
                            <label htmlFor="language">Language</label>
                        </div>}

                        {(formToSow === 'table' || formToSow === 'fixture') && <div className="inputContainer">
                            <input
                                type="text"
                                name="table"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.table}
                                placeholder=' '
                            />
                            <label htmlFor="table">Table</label>
                        </div>}
                        {(formToSow === 'table' || formToSow === 'fixture') && <div className="inputContainer">
                            <input
                                type="text"
                                name="league"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.league}
                                placeholder=' '
                            />
                            <label htmlFor="league">League</label>
                        </div>}

                        {(formToSow === 'table' || formToSow === 'fixture') && <div className="inputContainer">
                            <input
                                type="text"
                                name="sport"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sport}
                                placeholder=' '
                            />
                            <label htmlFor="sport">Sport</label>
                        </div>}

                        {(formToSow === 'movie' || formToSow === 'series') && <div className="inputContainer">
                            <input
                                type="text"
                                name="trailer"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.trailer}
                                placeholder=' '
                            />
                            <label htmlFor="trailer">Trailer</label>
                        </div>}


                        <div className="formFoot">
                            <button className="submitButton" type="submit">
                                Submit
                            </button>
                            {(createPostLoading || createMovieLoading || createMusicLoading || createSeriesLoading || createTableLoading || createFixtureLoading) && <div className="loading"></div>}
                        </div>
                        {uploadSuccessful && <div className="successful">Upload succesful!!</div>}
                    </form>
                )
                }
            </Formik>
        </div>
    )
}