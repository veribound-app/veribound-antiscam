import React, { useState, useEffect } from 'react';
import { useDisputes } from '../hooks/useDisputes';

export function DisputeTable() {
  const { disputes, loading } = useDisputes();

  // ... rest of your component code
}

export function useDisputes() {
  // dummy data for now so build passes
  return {
    disputes: [
      { id: 1, reason: "fraud", amount: 100 },
      { id: 2, reason: "duplicate", amount: 50 },
    ],
    loading: false,
  };
}

export default useDisputes;