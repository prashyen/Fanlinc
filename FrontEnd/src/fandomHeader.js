/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import GroupIcon from '@material-ui/icons/Group';

/*
Displays the fandom details.
Props
    fandom: the fandom for which this header contains Details

*/
export default function FandomHeader(props) {
    /*State of fandom genre & description before and after the fetch call*/
    const [fandomGenre, setFandomGenre] = useState('');
    const [fandomDescription, setFandomDescription] = useState('');

    /*The API call this component will make*/
    const getFandomDetailstAPI = `http://localhost:8080/fandom/fandomDetails?fandomName=${props.fandom}`;

//    const description = `Comic hero story`;
//    const genre = `Action`;

    return(
    <>
        <CssBaseline />

        {/*Fandom Header Start*/}
        <Grid
            container
            direction="row"
            width="100%"
            justify="flex-start"
            alignItems="center"
        >
            {/* Grid has 12 columns width - photo:details = 4:8 */}
            <Grid item sm={3} style={{ }}>
                <img src="https://i.ibb.co/S3S5YCD/game-Of-Thrones.jpg" alt="game-Of-Thrones" width="160px" height="150px"
                 style={{borderRadius: '50%'}}/>
            </Grid>
            <Grid item sm={9} style={{}}>
                <Typography variant="h2" gutterBottom>{props.fandom}</Typography>
                <Typography variant="subtitle2" gutterBottom>Genre: Action</Typography>
                <Typography variant="body1" gutterBottom>Aliquam sit amet tortor nisl. Mauris quis hendrerit nisl. Nulla pretium, nibh id ullamcorper tincidunt, nibh erat semper quam, eu gravida erat urna facilisis dui. Sed finibus sapien et erat molestie imperdiet.</Typography>
            </Grid>


        {/*Fandom Header End*/}
        </Grid>
        <Divider/>
    </>
    );
}


FandomHeader.propTypes = {
  fandom: PropTypes.string.isRequired,
};
