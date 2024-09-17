// src/lib/api.ts

export async function selectSupplier(supplierId: string) {
  try {
    const response = await fetch('/api/select-supplier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ supplierId }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error selecting supplier:', error);
    throw error;
  }
}
