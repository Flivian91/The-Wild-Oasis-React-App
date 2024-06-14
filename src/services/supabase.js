import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://asmecbropjwbvdhskamr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWVjYnJvcGp3YnZkaHNrYW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNzAzNDIsImV4cCI6MjAzMzg0NjM0Mn0.v8dUHdfN6h9l5i1YlZBrN05sS9sQhsnBZbDqRMMddeo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
