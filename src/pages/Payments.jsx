import React from 'react'

function Payments() {
  return (
    <div className="mt-4 p-3 border-t border-gray-700">
  <h3 className="text-white font-semibold mb-2">Payment Method</h3>
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2">
      <input type="radio" name="payment" className="accent-yellow-500" />
      Credit/Debit Card
    </label>
    <label className="flex items-center gap-2">
      <input type="radio" name="payment" className="accent-yellow-500" />
      UPI
    </label>
    <label className="flex items-center gap-2">
      <input type="radio" name="payment" className="accent-yellow-500" />
      Cash on Delivery
    </label>
  </div>
</div>
  )
}

export default Payments
