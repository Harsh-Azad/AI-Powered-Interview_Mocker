/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-mocker_owner:89miLsozakVI@ep-damp-king-a1cbxvqv.ap-southeast-1.aws.neon.tech/Ai-mocker?sslmode=require',
    }
  };