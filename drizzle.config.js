//import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 // out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_WCsb82LrDzNB@ep-purple-boat-adkquz9o-pooler.c-2.us-east-1.aws.neon.tech/ai-study-material-gen?sslmode=require&channel_binding=require',
  },
});
