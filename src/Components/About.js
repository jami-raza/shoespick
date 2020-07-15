import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#f8f8ff', height: '80vh', marginTop: '50px', textAlign: 'justify' }}>
      <p>We dare dream and creativity with jealousy and imagination. Our passion for knowledge and passion allows us to try to combine the diversity of our modern infrastructure with elegance and artistic creativity. When the idea turns into paper and continues to magically transform into shoes, the only thing we can do is follow our hearts. Urbansole is a premium brand, providing shoes services forever since 1998 to our valued customers.
            Made of premium leather and natural leather, our shoes are partly handcrafted in a striking, affordable lifestyle. By providing comfort, fashion design and the best products to its customers, Urbansole is geared towards the most elegant shoes. Our brand is one of the best-selling brands among the category that only works by calculating the luxury and demand for precious and emotional men and women with the retail network nationwide. Our collection of goods and services has inspired the individual to be the hallmark of Urbansole as Urbansole has considered its customers as an asset.</p>
      </Typography>
      </Container>
    </React.Fragment>
  );
}
