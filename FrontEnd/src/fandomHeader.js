/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

/*
Displays the fandom details.
Props
    fandom: the fandom for which this header contains Details
*/
export default function FandomHeader(props) {
    /*State of fandom genre & description before and after the fetch call*/
    const [fandomGenre, setFandomGenre] = useState('');
    const [fandomDescription, setFandomDescription] = useState('');
    const [fandomPhoto, setFandomPhoto] = useState('');

    useEffect(() => {
        /*The API call this component will make*/
        const getFandomDetailsAPI = `http://localhost:8080/fandom/fandomDetails?fandomName=${props.fandom}`;
        fetch(getFandomDetailsAPI, {
          method: 'GET',
          mode: 'cors',
          headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
          },
        }).then((response) => {
          switch (response.status) {
            case 200:
              return response.json();
            case 404:
              throw new Error('Fandom not found');
            default:
              throw new Error('Something went wrong when retrieving fandom details');
          }
        })
          .then((data) => {
            setFandomGenre(data.genre);
            setFandomDescription(data.description);
            setFandomPhoto(data.displayPhotoURL);
          }).catch((err) => {
            alert(err);
          });
    }, [props.fandom]);


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
            {/* Grid has 12 columns width - photo:details = 3:9 */}
            <Grid item sm={3} style={{ }}>
                <img src={""+ fandomPhoto +""} alt="fandom display photo" border="0" width="150px" height="150px" style={{borderRadius: '50%'}}/>
            </Grid>
            <Grid item sm={9} style={{}}>
                <Typography variant="h2" gutterBottom>{props.fandom}</Typography>
                <Typography variant="subtitle2" gutterBottom>Genre: {fandomGenre}</Typography>
                <Typography variant="body1" gutterBottom>{fandomDescription}</Typography>
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
