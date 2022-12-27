// Safen User Input Part I

// DESCRIPTION:
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// TASK:
// Implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

// SOLUTION:
function htmlSpecialChars(formData){
    let result = ""
    for (let i = 0; i < formData.length; i++){
      switch (formData[i]){
        case "<": result += "&lt;"; break
        case ">": result += "&gt;"; break
        case '"': result += "&quot;"; break
        case "&": result += "&amp;"; break
        default: result += formData[i]
      }
    }
    return result
}