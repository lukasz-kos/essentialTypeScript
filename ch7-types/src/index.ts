function sendEmail(to: string, subject: string, body: string) { ... }

// instead of manually typed parameters...
type EmailArgs = Parameters<typeof sendEmail>;
// [to: string, subject: string, body: string]

// you just use a type with spread syntax on one array
function queueEmail(...args: EmailArgs) {
  queue.push(() => sendEmail(...args));
}