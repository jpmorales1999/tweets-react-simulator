import React from 'react'
import { Card, CardContent } from '@mui/material'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import moment from 'moment'

import './Tweet.scss'

export default function Tweet(props) {

    const { tweet: { name, tweet, time }, index, deleteTweet } = props

    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
                </div>
                <p>
                    {tweet}
                </p>
                <div class='tweet__date-add-tweet'>
                    {moment(time).format('DD/MM/YYYY HH:MM')}
                </div>
            </CardContent>
        </Card>
    )
}
