import Testimonial from "./Testimonial";
import { Testimonials } from '../data';

export default function TestimonialsGrid() {
  return (
    <section className="testimonials-grid">
      { Testimonials.map(testimonial => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      )) }
    </section>
  )
}
