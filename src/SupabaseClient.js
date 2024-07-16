import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rdfrbfwaolddrttbmpor.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZnJiZndhb2xkZHJ0dGJtcG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNjI1ODgsImV4cCI6MjAzMzkzODU4OH0.D3FyP5kbBWyXa49YcNK9LRbsNf3ZjQbXRiKMF7dlU2k";

export const supabase = createClient(supabaseUrl, supabaseKey);
