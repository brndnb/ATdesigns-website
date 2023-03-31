const testimonials = [
    { text: "Our client received their buckles yesterday and handed them out today. They were a huge hit. Could not have asked for a better product!!!", author: "Jeff" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.  Thanks.", author: "DR" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.  Thanks.", author: "DR" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.  Thanks.", author: "DR" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.  Thanks.", author: "DR" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.  Thanks.", author: "DR" },
    // Add other testimonials here following the same structure
];

let currentTestimonial = 0;

function displayTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const testimonialElements = $('.testimonials');

    testimonialElements.eq(0).text('"' + testimonial.text + '"').fadeIn(1000);
    testimonialElements.eq(1).text('- ' + testimonial.author).fadeIn(1000);

    setTimeout(() => {
        testimonialElements.fadeOut(1000, () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            displayTestimonial();
        });
    }, 8000);
}

$(document).ready(() => {
    displayTestimonial();
});
