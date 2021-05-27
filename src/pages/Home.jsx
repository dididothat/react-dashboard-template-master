import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { creditCardsMapper } from '../data/creditCardsMapper';
import { CreditCard } from '../components/CreditCard';

const useStyles = makeStyles((theme) => {
  return {
    fixedHeight: {
      height: 'auto',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    },
    creditFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '& > div': {
        flexBasis: '32%',
        marginBottom: '20px',
      },
    },
    titleH1: {
      marginBottom: '20px',
    },
  };
});

export const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid item md={7} >
        <Paper className={fixedHeightPaper}>
          <Typography variant="h5" component="h1" className={classes.titleH1}>
            Tarjetas
          </Typography>
          <div className={classes.creditFlex}>
            {creditCardsMapper().map((creditCard) => (
              <CreditCard key={creditCard.id} {...creditCard} />
            ))}
          </div>
        </Paper>
        <Paper className={fixedHeightPaper}>
          <Typography variant="h5" component="h1" className={classes.titleH1}>
            Movimientos
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={5}>
        <Paper className={fixedHeightPaper}>
          <Typography variant="h5" component="h1" className={classes.titleH1}>
            Balance total
          </Typography>
        </Paper>
      </Grid>
      {/*       <Grid item xs={12} md={8} >
        <Paper className={fixedHeightPaper}>
          <Typography variant="h4">Tarjetas</Typography>
          {getCreditCards()}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} >
        <Paper className={fixedHeightPaper}>
          <Typography>Segunda caja</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} >
        <Paper className={fixedHeightPaper}>
          <Typography>Tercera caja</Typography>
        </Paper>
      </Grid> */}
    </>
  );
};
