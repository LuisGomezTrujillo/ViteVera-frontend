// src/components/forms/DonationForm.jsx
import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import Card from '../ui/Card';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('once');

  const presetAmounts = ['50000', '100000', '200000', '500000'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de pago
    alert(`Procesando donación de $${parseInt(amount).toLocaleString()} (${frequency === 'once' ? 'Única' : 'Mensual'})`);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-morado-uva mb-6 text-center">
        Haz tu Donación
      </h3>
      
      <form onSubmit={handleSubmit}>
        {/* Frequency Selection */}
        <div className="mb-6">
          <label className="block text-morado-uva font-semibold mb-2">
            Frecuencia
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFrequency('once')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                frequency === 'once' 
                  ? 'bg-morado-uva text-white' 
                  : 'bg-gray-100 text-gris-suave'
              }`}
            >
              Una vez
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                frequency === 'monthly' 
                  ? 'bg-verde-vid text-white' 
                  : 'bg-gray-100 text-gris-suave'
              }`}
            >
              Mensual
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <label className="block text-morado-uva font-semibold mb-2">
            Monto
          </label>
          <div className="grid grid-cols-4 gap-3 mb-3">
            {presetAmounts.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val)}
                className={`py-3 rounded-lg font-semibold transition-colors ${
                  amount === val 
                    ? 'bg-verde-vid text-white' 
                    : 'bg-gray-100 text-gris-suave hover:bg-gray-200'
                }`}
              >
                ${parseInt(val).toLocaleString()}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Otro monto"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-verde-vid focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-morado-uva text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
        >
          <DollarSign size={24} />
          <span>Continuar a Pago Seguro</span>
        </button>

        <p className="text-center text-sm text-gris-suave mt-4">
          🔒 Pago seguro con PayU / Vaki
        </p>
      </form>
    </Card>
  );
};

export default DonationForm;