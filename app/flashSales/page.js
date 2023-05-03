"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productSlice"
import FlashSalesPage from "../../components/affFlashSales";
export default function AffFlashSalesPage() {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchProducts());

    }, [dispatch]);
    return (
        <div>
            <FlashSalesPage />
        </div>
    );
} 