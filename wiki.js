let today = new Date();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmNDA4NTM3NGJjN2FhNGY5MjE1Y2Y0NzY0YzhlM2UzNCIsImp0aSI6Ijk5ZDA0ZDU4MzU5MzU0ODc2YWE2ZjVkZWYxM2YyMTBmMDQ1NTU4NGJlOTllYmNkNGY5MjY4NGYzOTY5ZTg0OGVmMWQxNWM3MjM2YjFjYTI3IiwiaWF0IjoxNjc5MTc3NjQzLjI0ODg0MiwibmJmIjoxNjc5MTc3NjQzLjI0ODg0NSwiZXhwIjozMzIzNjA4NjQ0My4yNDY1MDYsInN1YiI6IjcyMzA4NjI0IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.ZObzxczDd8-s4tzhg17rwebfVc4nPB54hTGRIKy_LHhElX3LG-D_FePUDO19EdzAuT1Zb8H9IGDTyTxilaXi3caei0yglTf4kDrXk9UJh3jp6StZXYCm0qas7hvZHePNgu-FD4CBne5JDSq_E-elQBM-3Px4YE7G--n64kt_i81BC2Tc_zchaYDL3PxeZ5HR1jVk_oGf8kEC4Lz0cYdJvp9dfJ9wyrI2YTfFGKHbefbNlB4aIUtDf8i45zHa68eesJ2BkZphuFkzt7-ip8y_S9zsHFU1Uh7VNJG_sAjBILIX7LJt4Z3M4EoTzIee8DqungzBhKwzQsvGPkJFo1selR0SqpceR9_gR7WEUeJZPLQITpHFlMUDGQ7z64j82Ifuw9xeoav0bwABwqWcMdJ2fI2tG9Y2ixPpVcyk1P8GtItklHFP-P4E4b_PS9KLC8WEAWSq9ztDFI1w9Ub5f6f0OcTB_8nKXM6OsnyXB1K8Q5dJMwyxZ5p2ulf8K9LSnKru4_p1izHXtRpFIRY_RCKvIwpp5bbti52fYR_VqQrCxe3FFJ6iOX8zT5Ndsx18DNnwuQ0_1IJwCsUvSMhHfmPP6hvs7JPp0PIEVGpxbjVeOb5fH6kjUNMEZydiZJ2i_opRYOf9izZKiKhgx9X_MlxIHNRR5PxMXqJm8St_buOROz0";
const url =
  "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}";

async function loadResponse(url) {
  let response = await fetch(url, {
    headers: {
      "Authorization": "Bearer ${ACCESS_TOKEN}",
      "Api-User-Agent": "todayinhistory marvleon@pdx.edu",
    }
    
  });
  response.json().then(console.log).catch(console.error);
}

loadResponse(url);
