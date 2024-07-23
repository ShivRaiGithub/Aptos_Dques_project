module my_account::QuestionAnswerModule {
    use aptos_std::signer;
    use aptos_std::string::String;
    use aptos_std::vector;

    struct AnswersStore has key {
        answers: vector<String>,
    }

    public fun initialize_answers_store(account: &signer)  {
        move_to(account, AnswersStore {
            answers: vector::empty(),
        });
    }

    public entry fun add_answer(account: &signer, answer: String) acquires AnswersStore {
        let address = signer::address_of(account);
        let answers_store = borrow_global_mut<AnswersStore>(address);
        vector::push_back(&mut answers_store.answers, answer);
    }

    #[view]
    // Adjusted to accept an account address parameter
    public fun view_answers(address: address): vector<String> acquires AnswersStore {
        let answers_store = borrow_global<AnswersStore>(address);
        answers_store.answers
    }
}
