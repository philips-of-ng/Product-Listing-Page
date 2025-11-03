import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Divider,
} from '@mui/material';
import ProductItem from '../components/ProductItem';

import { products } from '../assets/assets';

// Sample product data
const sampleProducts = products



const Collections = () => {
  const [search, setSearch] = useState('');
  const [filterProducts, setFilterProducts] = useState(sampleProducts);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevance');

  // --- FILTER HANDLERS ---
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = sampleProducts.slice();

    // Search filter
    if (search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  // --- SORT HANDLER ---
  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
    }

    setFilterProducts(fpCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <Box display="flex" gap={3} p={3}>
      {/* LEFT SIDE - FILTERS */}
      <Box width="250px">
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        {/* Category Filter */}
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Categories
          </Typography>
          <FormControlLabel control={<Checkbox value="Men" onChange={toggleCategory} />} label="Men" />
          <FormControlLabel control={<Checkbox value="Women" onChange={toggleCategory} />} label="Women" />
          <FormControlLabel control={<Checkbox value="Kids" onChange={toggleCategory} />} label="Kids" />
        </Paper>

        {/* Subcategory Filter */}
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Type
          </Typography>
          <FormControlLabel
            control={<Checkbox value="Topwear" onChange={toggleSubCategory} />}
            label="Topwear"
          />
          <FormControlLabel
            control={<Checkbox value="Bottomwear" onChange={toggleSubCategory} />}
            label="Bottomwear"
          />
          <FormControlLabel
            control={<Checkbox value="Winterwear" onChange={toggleSubCategory} />}
            label="Winterwear"
          />
        </Paper>
      </Box>

      <Divider orientation="vertical" flexItem />

      {/* RIGHT SIDE - PRODUCTS */}
      <Box flex={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="h5" fontWeight={600}>
            All Collections
          </Typography>

          {/* Search Input */}
          <TextField
            label="Search Products"
            size="small"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Sort Dropdown */}
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortType}
              label="Sort by"
              onChange={(e) => setSortType(e.target.value)}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="low-high">Low to High</MenuItem>
              <MenuItem value="high-low">High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={3}>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ProductItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image[0]}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No products found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Collections;
