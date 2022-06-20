import { TestimonialContainer, TestimonialList, TestimonialCard } from './style';

type Testimonial = {
    comment: string,
    name: string,
}

const Testimonials = () => {

    return (
        <TestimonialContainer>
            <div className="headline">Here's what social studies teachers around the world are saying: </div>
            <TestimonialList>
                {testimonialList.map((i, j) => (
                    <TestimonialCard key={j}>
                        <div className="comment">{i.comment}</div>
                        <div className="name">- {i.name}</div>
                    </TestimonialCard>
                ))}
            </TestimonialList>
        </TestimonialContainer>

    );
};

const testimonialList: Testimonial[] = [
    { comment: "Perfect as a first year teacher. Thank you so much!", name: "Sara H" },
    { comment: "This was engaging and fun for the students and for me!", name: "Susanna D" },
    { comment: "Excellent resource! Students were engaged by the reading and we had fantastic conversations in class.", name: "Social Science Matters" },
    { comment: "Wonderfully engaging activity, I have rarely been happier with a resource! My students loved this!", name: "Brittini B" },
    { comment: "This resource, Great item! Thank you for your hard work in this trying time.", name: "Andy C" },
    { comment: "As was the other I purchased from your store, was practical and immediately useful. I appreciate your willingness to share. Thank you!", name: "Ashlyn S" },
];

export default Testimonials;