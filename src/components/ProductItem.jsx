import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductItem = ({ name, price, image }) => (
  <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
    <CardMedia component="img" image={image} alt={name} height="200" />
    <CardContent>
      <Typography variant="subtitle1" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ₦{price.toLocaleString()}
      </Typography>
    </CardContent>
  </Card>
);

export default ProductItem;
