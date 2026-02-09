import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whtqgzwbhpcprehqterr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodHFnendiaHBjcHJlaHF0ZXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MTI1ODUsImV4cCI6MjA4NDk4ODU4NX0.pDT4QAcgQBJWsesXxRHDbDItQA-UctDqGHi60ehsLqQ' 
// 这两个值在 Supabase 后台的 Project Settings -> API 里找

export const supabase = createClient(supabaseUrl, supabaseKey)