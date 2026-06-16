const http = require('http');

async function testAdmin() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/callback/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: "admin@ahcareer.in",
        password: "Admin@AHCareer2026!",
        redirect: "false",
      }).toString()
    });
    
    console.log("Login Status:", res.status);
    const cookies = res.headers.get("set-cookie");
    
    if (!cookies) {
      console.log("No cookies received!");
      return;
    }

    const adminRes = await fetch("http://localhost:3000/admin", {
      headers: {
        Cookie: cookies
      }
    });

    console.log("Admin Page Status:", adminRes.status);
    const text = await adminRes.text();
    if (text.includes("Error: An error occurred in the Server Components render")) {
      console.log("SERVER COMPONENT ERROR FOUND IN HTML!");
    } else {
      console.log("No server component error found. HTML size:", text.length);
    }
  } catch (err) {
    console.error(err);
  }
}

testAdmin();
