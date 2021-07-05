import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import { img_base_url } from '../configs'

export default function MovieCardSmall({image}) {
    return (
        <Card style={{ width: 175, borderRadius: 5, marginBottom: 24 }}>
            <CardMedia 
                image={`${img_base_url}/w500${image}`}
                style={{
                    height: 250,
                    width: '100%'
                }}
            />
        </Card>
    )
}
