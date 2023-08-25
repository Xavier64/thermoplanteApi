import {createClient} from '@supabase/supabase-js';

const supabase = createClient("https://elaqiuahrzaecxuuecit.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsYXFpdWFocnphZWN4dXVlY2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwODYyNDUsImV4cCI6MjAwMDY2MjI0NX0.ZXwA4dwOGLGm3iXMaAYwRqcaqKqrbsxwOpZt9cQ7ZHw");

export default supabase;