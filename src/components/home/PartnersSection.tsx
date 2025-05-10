
import React from 'react';

const PartnersSection = () => {
  const banks = [
    { name: "BK Yacu", id: "bk" },
    { name: "BPR", id: "bpr" },
    { name: "Equity Bank", id: "equity" },
    { name: "Ecobank", id: "ecobank" },
  ];
  
  const moneyTransfers = [
    { name: "Western Union", id: "western-union" },
    { name: "MoneyGram", id: "moneygram" },
    { name: "RIA Money Transfer", id: "ria" },
    { name: "M-Pesa", id: "mpesa" },
  ];

  const bills = [
    { name: "REG (Rwanda Energy Group)", id: "reg" },
    { name: "WASAC", id: "wasac" },
    { name: "RRA", id: "rra" },
    { name: "eFASHE", id: "efashe" },
    { name: "School Fees", id: "school" },
  ];

  const mobileMoney = [
    { name: "MTN Mobile Money", id: "mtn" },
    { name: "Airtel Money", id: "airtel" },
    { name: "Safaricom M-Pesa", id: "safaricom" },
    { name: "Vodacom", id: "vodacom" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IHOZA Financial Hub Ltd collaborates with leading financial institutions to bring you reliable services.
          </p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary text-center">Banking Partners</h3>
            <div className="logo-grid">
              {banks.map((bank) => (
                <div key={bank.id} className="logo-item">
                  <span className="font-semibold">{bank.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary text-center">Money Transfer Services</h3>
            <div className="logo-grid">
              {moneyTransfers.map((service) => (
                <div key={service.id} className="logo-item">
                  <span className="font-semibold">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary text-center">Bill Payment Services</h3>
            <div className="logo-grid">
              {bills.map((bill) => (
                <div key={bill.id} className="logo-item">
                  <span className="font-semibold">{bill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary text-center">Mobile Money Services</h3>
            <div className="logo-grid">
              {mobileMoney.map((service) => (
                <div key={service.id} className="logo-item">
                  <span className="font-semibold">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
