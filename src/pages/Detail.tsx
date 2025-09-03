import { useLocation, useParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import ScoreItem from "../components/Leaderboard/ScoreItem";
import type { ModelScore } from "../types";

const data = {
  createTime: "April 3, 2025",
  updateTime: "August 7, 2025",
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const entities = state as ModelScore[];
  return (
    <div className="min-h-screen bg-black ">
      <div className="container py-8 mx-auto overflow-hidden lg:max-w-[1312px]">
        <h1 className="text-white text-4xl font-medium font-aeonik mb-8">{id}</h1>
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="space-y-6 text-gray-300">
              <h2 className="text-xl text-white font-aeonik">Performance Comparision</h2>
              <div className="relative">
                <div className="space-y-3 overflow-auto h-auto">
                  {entities.map((entity, index) => <ScoreItem key={index} entity={entity} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-8 lg:max-w-screen-sm lg:mb-0 mt-20 lg:mt-0">
            <div className="max-w-full prose-x prose break-words prose:text-gray-300 text-gray-300 prose-invert prose-headings:mt-0 prose-headings:text-white prose-headings:font-medium prose-img:w-full prose-img:my-0 [&_p:first-child]:mt-0 prose-p:before:content-none prose-p:after:content-none prose-blockquote:not-italic prose-blockquote:font-normal lg:prose-sm">
              <p><b>Update April 3, 2025</b></p>
              <p>HLE has been finalized to 2,500 questions. The previous version of the leaderboard is now under the “Legacy” section and will be referred to as “HLE-preview”. All current model performance on this version of HLE is similar to the previous version.</p>
              <p>Changes</p>
              <ul>
                <li>
                  <p>
                    We removed all errors correctly flagged as part of our community feedback
                    <a target="_blank" rel="noopener noreferrer" href="https://scale.com/blog/humanitys-last-exam-results">bug bounty </a>
                    program. This program ended on March 21, 2025.
                  </p>
                </li>
                <li>
                  <p>
                    Searchable questions were removed by the following procedure. A question is potentially searchable if a model with search tools answered correctly, but answered incorrectly without search. Each of these potentially searchable questions was then manually audited, removing any that were easily found via web search. We used GPT-4o mini/GPT-4o search and Perplexity Sonar models in this procedure.
                  </p>
                </li>
                <li>
                  <p>
                    A backup pool of high quality questions was used to replace a portion of the questions removed.
                  </p>
                </li>
              </ul>
              <h2 id="introduction">Introduction</h2>
              <p>
                AI capability is evaluated based on benchmarks, yet as their progress accelerates, benchmarks become quickly saturated, losing their utility as a measurement tool. Performing well on formerly frontier benchmarks such as <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2009.03300">MMLU</a> and <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2311.12022">GPQA</a> are no longer strong signals of progress as frontier models reach or exceed human level performance on them.
              </p>
              <p>In partnership with the
                <a target="_blank" rel="noopener noreferrer" href="https://www.safe.ai/">
                  Center for AI Safety
                </a>
                , we address the problem of benchmark saturation by creating Humanity’s Last Exam (HLE):<b> 2,500 of the toughest, subject-diverse, multi-modal questions designed to be the last academic exam of its kind for AI</b>. HLE is designed to test for both depth of reasoning (eg. world-class mathematical problems) and breadth of knowledge across its subject domains, providing a precise measurement of model capability. Current frontier models perform poorly on HLE with low accuracies, and systematically exhibit uncalibrated overconfidence in their answers.
              </p>
              <p>We <b>publicly release Humanity’s Last Exam</b> for the research community to better understand model capabilities. Evaluation is low-cost, as questions are precise and unambiguous with closed-ended answers provided – allowing for automatic evaluation. To combat the serious problem of training data contamination and benchmark hacking, we have an additional held-out private set of HLE questions  to periodically measure overfitting to the public dataset. More research on overfitting can be found
                <a target="_blank" rel="noopener noreferrer" href="https://scale.com/research/llm-performance-grade-school-arithmetic">
                  here
                </a>.
              </p>
              <p>
                High accuracy on HLE would demonstrate AI has achieved expert-level performance on closed-ended cutting-edge scientific knowledge, but it would not alone suggest autonomous research capabilities or “artificial general intelligence.”
              </p>
              <p>
                See the linked
                <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2501.14249">
                  full paper
                </a>
                and
                <a target="_blank" rel="noopener noreferrer" href="https://lastexam.ai">
                  dataset.
                </a>
              </p>
              <h2 id="methodology">Methodology</h2>
              <p>Leaderboard rankings are determined using
                <b>Rank (Upper Bound)</b>
                , which reflects a model’s statistical position based on confidence intervals. The ranking process follows these steps:</p>
              <ol start={1}>
                <li>
                  <p>
                    Count the number of models that are <b>statistically significantly better</b> than the target model.
                  </p>
                </li>
                <li>
                  <p>Add <b>1</b> to this count to determine the model’s rank.
                  </p>
                </li>
              </ol>
            </div>
            <div className="flex items-center mt-2 text-sm sm:mt-0 text-zinc-400">
              <Calendar className="inline-block w-4 h-4 mr-1.5" />
              <span>{"Last updated: "}{data.updateTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Detail;