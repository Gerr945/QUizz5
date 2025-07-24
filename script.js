 // Quiz questions
        const questions = [
            {
                question: "Apa ibukota Indonesia?",
                options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
                answer: 0
            },
            {
                question: "Siapa presiden pertama Indonesia?",
                options: ["Soeharto", "Joko Widodo", "Soekarno", "BJ Habibie"],
                answer: 2
            },
            {
                question: "Berapa jumlah provinsi di Indonesia?",
                options: ["34", "33", "32", "31"],
                answer: 0
            },
            {
                question: "Apa nama gunung tertinggi di Indonesia?",
                options: ["Gunung Rinjani", "Gunung Kerinci", "Gunung Semeru", "Gunung Jaya Wijaya"],
                answer: 3
            },
            {
                question: "Bahasa resmi Indonesia adalah?",
                options: ["Bahasa Jawa", "Bahasa Indonesia", "Bahasa Sunda", "Bahasa Inggris"],
                answer: 1
            },
            {
                question: "Tanggal berapa Indonesia merdeka?",
                options: ["17 Agustus 1950", "17 Agustus 1946", "17 Agustus 1945", "17 Agustus 1944"],
                answer: 2
            },
            {
                question: "Apa lambang negara Indonesia?",
                options: ["Burung Garuda", "Burung Elang", "Burung Merak", "Burung Cenderawasih"],
                answer: 0
            },
            {
                question: "Berapa jumlah pulau di Indonesia?",
                options: ["Lebih dari 17.000", "Lebih dari 10.000", "Lebih dari 5.000", "Lebih dari 20.000"],
                answer: 0
            },
            {
                question: "Apa mata uang resmi Indonesia?",
                options: ["Dollar", "Euro", "Ringgit", "Rupiah"],
                answer: 3
            },
            {
                question: "Tahun berapa reformasi di Indonesia dimulai?",
                options: ["1996", "1997", "1998", "1999"],
                answer: 2
            },
            {
                question: "Apa nama pulau terbesar di Indonesia?",
                options: ["Sumatra", "Kalimantan", "Sulawesi", "Jawa"],
                answer: 1
            },
            {
                question: "Suku apa yang dominan di Bali?",
                options: ["Suku Batak", "Suku Dayak", "Suku Bali", "Suku Minang"],
                answer: 2
            },
            {
                question: "Apa nama lagu kebangsaan Indonesia?",
                options: ["Indonesia Raya", "Garuda Pancasila", "Bagimu Negeri", "Hari Merdeka"],
                answer: 0
            },
            {
                question: "Berapa lama waktu yang dibutuhkan untuk satu kali pemilihan presiden?",
                options: ["4 tahun", "5 tahun", "6 tahun", "7 tahun"],
                answer: 1
            },
            {
                question: "Apa flora identitas Indonesia?",
                options: ["Anggrek Bulan", "Rafflesia Arnoldii", "Padma Raksasa", "Bunga Bangkai"],
                answer: 0
            },
            {
                question: "Apa fauna identitas Indonesia?",
                options: ["Harimau Sumatra", "Orangutan", "Komodo", "Elang Jawa"],
                answer: 3
            },
            {
                question: "Dimana Candi Borobudur berada?",
                options: ["Jawa Tengah", "Jawa Timur", "Yogyakarta", "Jawa Barat"],
                answer: 0
            },
            {
                question: "Apa nama danau terbesar di Indonesia?",
                options: ["Danau Toba", "Danau Matano", "Danau Singkarak", "Danau Poso"],
                answer: 0
            },
            {
                question: "Apa nama bandara internasional di Bali?",
                options: ["Soekarno-Hatta", "Juanda", "Ngurah Rai", "Husein Sastranegara"],
                answer: 2
            },
            {
                question: "Apa nama selat yang memisahkan Jawa dan Sumatra?",
                options: ["Selat Sunda", "Selat Malaka", "Selat Bali", "Selat Karimata"],
                answer: 0
            },
            {
                question: "Berapa jumlah kepulauan di Indonesia?",
                options: ["Tiga", "Empat", "Lima", "Enam"],
                answer: 2
            },
            {
                question: "Apa nama museum terkenal di Jakarta?",
                options: ["Museum Nasional", "Museum Fatahillah", "Museum Bank Indonesia", "Semua benar"],
                answer: 3
            },
            {
                question: "Apa nama tarian tradisional Bali?",
                options: ["Tari Kecak", "Tari Saman", "Tari Piring", "Tari Tor-Tor"],
                answer: 0
            },
            {
                question: "Apa nama alat musik tradisional Jawa?",
                options: ["Angklung", "Gamelan", "Kolintang", "Sasando"],
                answer: 1
            },
            {
                question: "Apa nama taman nasional pertama di Indonesia?",
                options: ["Taman Nasional Komodo", "Taman Nasional Ujung Kulon", "Taman Nasional Bromo Tengger Semeru", "Taman Nasional Gunung Leuser"],
                answer: 1
            },
            {
                question: "Apa nama sungai terpanjang di Indonesia?",
                options: ["Sungai Kapuas", "Sungai Mahakam", "Sungai Barito", "Sungai Musi"],
                answer: 0
            },
            {
                question: "Apa julukan kota Bandung?",
                options: ["Kota Hujan", "Kota Kembang", "Kota Gudeg", "Kota Pahlawan"],
                answer: 1
            },
            {
                question: "Apa nama universitas tertua di Indonesia?",
                options: ["UI", "ITB", "UGM", "UNPAD"],
                answer: 0
            },
            {
                question: "Apa nama komplek candi Hindu terbesar di Indonesia?",
                options: ["Candi Borobudur", "Candi Prambanan", "Candi Mendut", "Candi Sewu"],
                answer: 1
            },
            {
                question: "Apa nama gunung berapi aktif di Jawa Timur?",
                options: ["Gunung Merapi", "Gunung Bromo", "Gunung Rinjani", "Gunung Agung"],
                answer: 1
            }
        ];
        
        // Quiz variables
        let currentQuestion = 0;
        let score = 0;
        let timer;
        let timeLeft = 60;
        let selectedOption = null;
        let userAnswers = [];
        
        // DOM elements
        const startScreen = document.getElementById('start-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        const startBtn = document.getElementById('start-btn');
        const nextBtn = document.getElementById('next-btn');
        const restartBtn = document.getElementById('restart-btn');
        const questionEl = document.getElementById('question');
        const optionsEl = document.getElementById('options');
        const timerEl = document.getElementById('timer');
        const progressBar = document.getElementById('progress-bar');
        const questionNumberEl = document.getElementById('question-number');
        const scoreEl = document.getElementById('score');
        const resultsEl = document.getElementById('results');
        
        // Event listeners
        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', nextQuestion);
        restartBtn.addEventListener('click', restartQuiz);
        
        // Start quiz
        function startQuiz() {
            startScreen.style.display = 'none';
            quizScreen.style.display = 'block';
            loadQuestion();
            startTimer();
        }
        
        // Load question
        function loadQuestion() {
            resetState();
            const question = questions[currentQuestion];
            questionEl.textContent = question.question;
            questionNumberEl.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
            
            question.options.forEach((option, index) => {
                const button = document.createElement('div');
                button.classList.add('option');
                button.textContent = option;
                button.addEventListener('click', () => selectOption(index));
                optionsEl.appendChild(button);
            });
            
            updateProgressBar();
        }
        
        // Select option
        function selectOption(index) {
            selectedOption = index;
            const options = document.querySelectorAll('.option');
            options.forEach(option => option.classList.remove('selected'));
            options[index].classList.add('selected');
        }
        
        // Reset state
        function resetState() {
            selectedOption = null;
            while (optionsEl.firstChild) {
                optionsEl.removeChild(optionsEl.firstChild);
            }
        }
        
        // Start timer
        function startTimer() {
            clearInterval(timer);
            timeLeft = 60;
            updateTimerDisplay();
            
            timer = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    nextQuestion();
                }
            }, 1000);
        }
        
        // Update timer display
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 10) {
                timerEl.style.color = '#dc3545';
            } else {
                timerEl.style.color = '#3a4a6d';
            }
        }
        
        // Update progress bar
        function updateProgressBar() {
            const progress = ((currentQuestion) / questions.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
        
        // Next question
        function nextQuestion() {
            clearInterval(timer);
            
            // Check if answer is correct
            const isCorrect = selectedOption === questions[currentQuestion].answer;
            userAnswers.push({
                question: questions[currentQuestion].question,
                userAnswer: questions[currentQuestion].options[selectedOption],
                correctAnswer: questions[currentQuestion].options[questions[currentQuestion].answer],
                isCorrect: isCorrect
            });
            
            if (isCorrect) {
                score++;
            }
            
            currentQuestion++;
            
            if (currentQuestion < questions.length) {
                loadQuestion();
                startTimer();
            } else {
                showResults();
            }
        }
        
        // Show results
        function showResults() {
            quizScreen.style.display = 'none';
            resultScreen.style.display = 'block';
            
            scoreEl.textContent = `Skor Anda: ${score} dari ${questions.length}`;
            
            userAnswers.forEach((answer, index) => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
                
                resultItem.innerHTML = `
                    <p><strong>Pertanyaan ${index + 1}:</strong> ${answer.question}</p>
                    <p><strong>Jawaban Anda:</strong> <span class="${answer.isCorrect ? 'correct-text' : 'incorrect-text'}">${answer.userAnswer || '(Tidak dijawab)'}</span></p>
                    ${!answer.isCorrect && answer.userAnswer ? `<p><strong>Jawaban Benar:</strong> ${answer.correctAnswer}</p>` : ''}
                `;
                
                resultsEl.appendChild(resultItem);
            });
        }
        
        // Restart quiz
        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            userAnswers = [];
            resultsEl.innerHTML = '';
            resultScreen.style.display = 'none';
            startScreen.style.display = 'flex';
        }