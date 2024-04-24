import sql from 'mssql';

const dbSettings = {
    user: "soporte",
    password: "12345678",
    server:"BILLSARAVIA",
    database: "preuba",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};

export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };